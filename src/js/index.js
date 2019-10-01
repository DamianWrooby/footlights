import "regenerator-runtime/runtime";
import '../styles.scss';
import List from './models/List';
import * as listView from './views/listView';
import { elements } from './views/base';

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

/**
 * GAME CONTROLLER
 */
elements.gamesList.addEventListener('click', (e) => {
	const item = e.target.closest('.games-list__item');
	if (item) {
		console.log('item was clicked');
	}
});

const controlGame = async () => {
	const id = window.location.hash.replace('#', '');

	if (id) {
	}
};