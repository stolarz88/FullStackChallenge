import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Tabs, Tab } from 'carbon-components-react';
import './tabs.scss';

class PageTabs extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount = () => {
		// Handles refresh render
		this.clickFirstTab();
	};

	/* This works on forcing a click for some reason */
	componentDidUpdate = (prevProps, prevState) => {
		// Handles first render
		if (prevProps.data !== this.props.data) {
			this.clickFirstTab();
		}
	};

	clickFirstTab = () => {
		const tabs = document.querySelectorAll('[role="tab"]');
		if (tabs.length > 0) {
			tabs[0].click();
		}
	};

	buildTabs = games => {
		const gameArray = [];
		const gamesArray = Object.values(games);
		console.log(gamesArray);
		if (gamesArray.length > 0) {
			gamesArray.forEach(game => {
				gameArray.push(this.returnTabItem(game));
			});
		}
		return gameArray;
	};

	returnTabItem = game => {
		const item = game;
		return (
			<Tab
				key={item.modifiedAt}
				// className="placements--label"
				label={`${item.awayTeam.name} @ ${item.homeTeam.name}`}>
				{this.props.buildBoxScore(game)}
			</Tab>
		);
	};

	render() {
		return (
			<Tabs className="tab__wrapper" selected={0}>
				{this.buildTabs(this.props.data)}
			</Tabs>
		);
	}
}

export default PageTabs;
