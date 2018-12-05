import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../CSS/style.scss';
import AppWrapper from './Components/DomHelpers/AppWrapper';
import App from './App';
import AppConfig from './AppConfig';

const appBasePath = AppConfig.getAppBasePath();

const renderApp = () => {
	render(
		<AppWrapper>
			<BrowserRouter basename={appBasePath}>
				<App />
			</BrowserRouter>
		</AppWrapper>,
		document.getElementById('app__root')
	);
};

renderApp();

// It works well w/ Middleware HOT
// if (module.hot) {
// 	module.hot.accept();
// }
