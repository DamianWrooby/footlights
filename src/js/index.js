import "regenerator-runtime/runtime";
import '../styles.scss';
import List from './models/List';
import * as listView from './views/listView';

const state = {};

/**
 * LIST CONTROLLER
 */

const controlList = async () => {
	state.list = new List();
	try {
		await state.list.getList();
		console.log(state.list.result);
		listView.renderGamesList(state.list.result);
	} catch (err) {
		console.log('Something went wrong.');
	}
};
controlList();