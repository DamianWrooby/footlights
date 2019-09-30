import "regenerator-runtime/runtime";
import '../styles.scss';
import List from './models/List';

const state = {};

/**
 * LIST CONTROLLER
 */

const controlList = async () => {
	state.list = new List();
	try {
		await state.list.getList();
		console.log(state.list.result);

		// listView.renderResults(state.search.result);
	} catch (err) {
		alert('Something went wrong.');
	}
};
controlList();