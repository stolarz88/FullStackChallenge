import React, { Component } from 'react';

class ContentWrapper extends Component {
	render() {
		return (
			<div {...this.props} className="content__wrapper">
				{this.props.children}
			</div>
		);
	}
}

export default ContentWrapper;
