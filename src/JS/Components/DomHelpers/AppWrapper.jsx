import React, { Component } from 'react';
import AppConfig from './../../AppConfig';
import PageWrapper from './PageWrapper';

class AppWrapper extends Component {
	componentWillMount = () => {
		/* Global API Calls can happen here */
	};

	render() {
		return (
			<div {...this.props} className="app__wrapper">
				<PageWrapper>{this.props.children}</PageWrapper>
			</div>
		);
	}
}

export default AppWrapper;
