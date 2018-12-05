import axios from 'axios';
import cachios from 'cachios';
import AppDispatcher from '../Dispatcher';
import { AppActionConstants } from './AppActionConstants';
import AppConfig from '../../AppConfig';

const barstoolDataAPI = AppConfig.getApiBasePath();

export const fetchDataFeed = () => {
	return axios
		.all([
			cachios.get(`${barstoolDataAPI}/dev/feed/game/one`, {
				responseType: 'json',
				ttl: 60,
			}),
			cachios.get(`${barstoolDataAPI}/dev/feed/game/two`, {
				responseType: 'json',
				ttl: 60,
			}),
		])
		.then(
			axios.spread((game1, game2) => {
				// do something with both responses
				const dataFeed = {
					game1,
					game2,
				};
				AppDispatcher.dispatch({
					type: AppActionConstants.fetchDataFeed, // "FETCHDATAFEED"
					value: dataFeed,
				});
			})
		);
};
