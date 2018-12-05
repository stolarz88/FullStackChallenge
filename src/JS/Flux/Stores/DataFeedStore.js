import AppDispatcher from '../Dispatcher';
import EventEmitter from 'events';
import { AppActionConstants } from '../Actions/AppActionConstants';

class DataFeedStore extends EventEmitter {
	constructor() {
		super();

		this.dataFeed = {};

		/*
        Need to register all actions with the AppDispatcher
        */

		AppDispatcher.register(action => {
			switch (action.type) {
				case AppActionConstants.fetchDataFeed:
					this.dataFeed.game1 = action.value.game1.data.game;
					this.dataFeed.game2 = action.value.game2.data;
					this.emit('feed__loaded');
					break;
				default:
					break;
			}
		});
	}

	/*
    Getter function to return the current state
    */
	getData = i => this.dataFeed[`game${i}`];
}

export default new DataFeedStore();
