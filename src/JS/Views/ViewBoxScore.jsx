import React, { Component } from 'react';
import { onStateChange } from 'events';
import LoadingIcon from '../Components/Loading/LoadingIcon';
import PageTabs from '../Components/Tabs/Tabs';
import { fetchDataFeed } from '../Flux/Actions/DataFeedActions';
import DataFeedStore from '../Flux/Stores/DataFeedStore';
import { Span, Div, P, Strong } from '../Components/DomHelpers/DomEls';

// This could in theory be a database object
const leagueMappingSettings = {
	MLB: {
		// Name matches Alias from API
		periods: 9,
		columns: ['R', 'H', 'E'],
		scoreParams: ['runs', 'hits', 'errors'],
	},
	NFL: {
		// Name matches Alias from API
		periods: 4,
		columns: ['T'],
		scoreParms: ['score'],
	},
	NHL: {
		// Name matches Alias from API
		periods: 3,
		columns: ['T'],
		scoreParms: ['goals'],
	},
};

class ViewBoxScore extends Component {
	constructor() {
		super();
		this.state = {
			isHidden: true,
		};
		console.log('loaded');
	}

	componentWillMount = () => {
		fetchDataFeed();
	};

	componentDidMount = () => {
		DataFeedStore.on('feed__loaded', this.setBoxScore);
	};

	componentWillUnmount = () => {
		DataFeedStore.removeListener('feed__loaded', this.setBoxScore);
	};

	getPeriodsScore = (data, team) => {
		const league = data.league.alias;
		const teamDetails = data[`${team}TeamDetails`];
		const totalPeriods = this.getTotalPeriods(data, league);
		/* This could be made more readable by passing a param for 'individual' or 'totals'; but for now it works */
		const periodsPlayed = teamDetails.length;
		const remainingPeriods = totalPeriods - periodsPlayed;
		const scoringParams = leagueMappingSettings[league].scoreParams; // First one is the Primary Unit to track

		// Now we build the scores of 'periodsPlayed' we have and then add 0's for the remaining if it's greater then 0 left.
		let scoreDoms = [];
		let totals = [];
		let totalParamsCount = leagueMappingSettings[league].scoreParams.length; // 3 for MLB || 1 for NFL

		/* Set initial Array to 0 || If this isn't done you start with undefined which returns NaN when we try to add our individual scores together */
		for (let i = 0; i < totalParamsCount; i++) {
			totals[i] = 0;
		}
		/* ===================== */

		for (let i = 0; i < periodsPlayed; i++) {
			// Do stuff with arr[i] or i
			scoreDoms.push(<Span key={`${team}__score__${i}`}>{teamDetails[i][scoringParams[0]]}</Span>);
			// We need to build the totals for Score Params but we theoretically the API would be different so we need to do a few extra loops to make it fully dynamic
			for (let b = 0; b < totalParamsCount; b++) {
				totals[b] += teamDetails[i][scoringParams[b]];
			}
		}

		/* Fill in the rest of the time periods */
		if (remainingPeriods > 0) {
			for (let i = 0; i < remainingPeriods; i++) {
				scoreDoms.push(<Span key={`${team}__fill__${i}`}>0</Span>);
			}
		}

		/* Build Totals into Dom Elems */
		let totalDoms = [];
		if (totals.length > 0) {
			for (let i = 0; i < totals.length; i++) {
				totalDoms.push(<Span key={`${team}__totals__${i}`}>{totals[i]}</Span>);
			}
		}
		return [scoreDoms, totalDoms];
	};

	/* Helper Function to return Ordinal */
	getNumberWithOrdinal = n => {
		const s = ['th', 'st', 'nd', 'rd'];
		const v = n % 100;
		return n + (s[(v - 20) % 10] || s[v] || s[0]);
	};

	getGameTotalColumns = league => {
		let columns = [];
		for (let i = 0; i < leagueMappingSettings[league].columns.length; i++) {
			columns.push(<Span key={`column__${i}`}>{leagueMappingSettings[league].columns[i]}</Span>);
		}

		return columns;
	};

	setBoxScore = () => {
		// set state here
		this.setState(
			{
				isHidden: false,
				games: {
					game1: DataFeedStore.getData(1),
					game2: DataFeedStore.getData(2),
				},
			},
			() => {
				/* This is an easy way to check the state to confirm it updated */
				console.log(this.state);
			}
		);
	};

	getTotalPeriods = (data, league) => {
		const totalAwayPeriods = data.awayTeamDetails.length;
		const totalHomePeriods = data.homeTeamDetails.length;
		const periodsPlayed = totalAwayPeriods > totalHomePeriods ? totalAwayPeriods : totalHomePeriods;
		let totalPeriods;
		if (periodsPlayed > leagueMappingSettings[league].periods) {
			totalPeriods = periodsPlayed;
		} else {
			totalPeriods = leagueMappingSettings[league].periods;
		}

		return totalPeriods;
	};

	checkStatus = data => {
		if (data.status === 'CLOSED') {
			return (
				<Strong>
					<Span>Final</Span>
				</Strong>
			);
		} else {
			return (
				// Assuming Baseball but we can return differntly formatted chunsk based on league as an enhancement
				<Strong>
					<Span>{data.currentPeriodHalf == 'B' ? 'Btm' : 'Top'}</Span>
					<br />
					<Span>{this.getNumberWithOrdinal(data.currentPeriod)}</Span>
				</Strong>
			);
		}
	};

	buildTimePeriods = (data, league) => {
		const totalPeriods = this.getTotalPeriods(data, league);

		let periodsDom = [];
		for (let i = 1; i <= totalPeriods; i++) {
			// Do stuff with arr[i] or i
			periodsDom.push(<Span key={`leaguePeriods__${i}`}>{i}</Span>);
		}

		return periodsDom;
	};

	returnTeamBoxInfo = (data, team) => {
		return (
			<Div
				className={`boxscore__details__team boxscore__details__team--${team}`}
				style={{ background: `#${data[`${team}Team`].teamColor}`, color: `#${data[`${team}Team`].textColor}` }}>
				<P>
					<strong>{data[`${team}Team`].name}</strong>
					<small>{data[`${team}Team`].abbr}</small>
				</P>
				<Span>{data[`${team}Team`].market}</Span>
			</Div>
		);
	};

	/* ========================================== */
	/* TEMPORARY STYLING TO SHOW PROOF OF CONCEPT */
	/* ========================================== */
	checkWinner = (data, team) => {
		let winner;
		if (data.status === 'CLOSED') {
			// Check if game is over
			winner = data.awayTeamFinal > data.homeTeamFinal ? 'away' : 'home';
			if (team === winner) {
				return 'winner';
			} else {
				return 'loser';
			}
		}
	};

	buildDynamicBoxScore = data => {
		return (
			<div id="boxScore__container">
				<div className="boxscore">
					<div className="boxscore__team boxscore__team--header">
						<label />
						<div className="boxscore__team__units">{this.buildTimePeriods(data, data.league.alias)}</div>
						<div className="boxscore__team__results">{this.getGameTotalColumns(data.league.alias)}</div>
					</div>
					<div className={`boxscore__team boxscore__team--away ${this.checkWinner(data, 'away')}`}>
						<label>{data.awayTeam.abbr}</label>
						<div className="boxscore__team__units">{this.getPeriodsScore(data, 'away')[0]}</div>
						<div className="boxscore__team__results">{this.getPeriodsScore(data, 'away')[1]}</div>
					</div>
					<div className={`boxscore__team boxscore__team--home ${this.checkWinner(data, 'home')}`}>
						<label>{data.homeTeam.abbr}</label>
						<div className="boxscore__team__units">{this.getPeriodsScore(data, 'home')[0]}</div>
						<div className="boxscore__team__results">{this.getPeriodsScore(data, 'home')[1]}</div>
					</div>
					<div className="boxscore__details">
						{this.returnTeamBoxInfo(data, 'away')}
						<div className="boxscore__details__info">{this.checkStatus(data)}</div>
						{this.returnTeamBoxInfo(data, 'home')}
					</div>
				</div>
			</div>
		);
	};

	render() {
		return (
			<section>
				{this.state.isHidden && <LoadingIcon active withOverlay={false} />}
				{!this.state.isHidden && <PageTabs data={this.state.games} buildBoxScore={this.buildDynamicBoxScore} />}
			</section>
		);
	}
}

export default ViewBoxScore;
