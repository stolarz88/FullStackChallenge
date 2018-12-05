import axios from 'axios';
import path from 'path';

class AppConfig {
	constructor() {
		// Add Env variable to change from Localhost/ Dev/ QA
		// Local
		this.appBasePath = document.querySelector('#appUrl').value;

		this.apiBasePath = document.querySelector('#apiUrl').value;
	}

	getAppBasePath = () => this.appBasePath;
	getApiBasePath = () => this.apiBasePath;
}

export default new AppConfig();
