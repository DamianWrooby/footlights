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

const controlList = async (competitionID) => {
	state.list = new List();
	listView.clearList();
	try {
		await state.list.getList();
		if (competitionID) {
			listView.renderGamesList(
				state.list.result.filter(function(el) {
					return el.competition.id === competitionID;
				})
			);
		} else {
			listView.renderGamesList(state.list.result);
		}
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
elements.gamesList.addEventListener('click', gameView.checkHash);
elements.allButton.addEventListener('click', function() {
	controlList();
});
elements.premierButton.addEventListener('click', function() {
	controlList(15);
});
elements.laligaButton.addEventListener('click', function() {
	controlList(14);
});
elements.serieaButton.addEventListener('click', function() {
	controlList(13);
});
elements.bundesButton.addEventListener('click', function() {
	controlList(11);
});
elements.l1Button.addEventListener('click', function() {
	controlList(10);
});
