import React, { Component } from 'react';
import { Loading } from 'carbon-components-react';
import './loading.scss';

class LoadingIcon extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <Loading active={this.props.active} withOverlay={this.props.withOverlay} />;
	}
}

export default LoadingIcon;
