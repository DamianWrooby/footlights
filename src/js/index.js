import 'regenerator-runtime/runtime';
import '../styles.scss';
import List from './models/List';
import * as listView from './views/listView';
import * as gameView from './views/gameView';
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
 * GAME VIEW CONTROLLER 
 */
const controlGame = () => {
	const id = window.location.hash.replace('#', '');
	if (id) {
		if (state.list) {
			// Close current tab
			gameView.closePrevTab();
			// Highlight selected game
			gameView.highlightSelected(id);
			// Open game view
			gameView.renderFullGame(state.list.result, id);
		}
	}
};

/**
 * EVENT CONTROLLER 
 */
window.addEventListener('hashchange', controlGame);
document.querySelector('.games-list').addEventListener('click', gameView.checkHash);
