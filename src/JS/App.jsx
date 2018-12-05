import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import LoadingIcon from './Components/Loading/LoadingIcon';

const Loading = () => <LoadingIcon active />;

// Code splitting with dynamic import
// https://reactjs.org/docs/code-splitting.html
const ViewBoxScore = Loadable({
	loader: () => import('./Views/ViewBoxScore'),
	loading: Loading,
});

const App = () => (
	<Switch>
		<Route exact path="/" component={ViewBoxScore} />
	</Switch>
);

export default App;
