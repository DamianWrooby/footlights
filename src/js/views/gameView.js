// Highlight selected game
export const highlightSelected = (id) => {
	const resultsArr = Array.from(document.querySelectorAll('.games-list__item'));
	resultsArr.forEach((el) => {
		el.classList.remove('games-list__item--active');
	});
	document.querySelector(`.games-list__item[href*="${id}"]`).classList.add('games-list__item--active');
};

// Close previous opened game tab
export const closePrevTab = () => {
	if (document.querySelector('.games-list__video')) {
		document.querySelector('.games-list__video').remove();
	}
};

// Check hash
export const checkHash = (e) => {
	const targetHash = e.target.closest('.games-list__item').href.split('#', [ 2 ])[1];
	console.log(targetHash);
	if (targetHash === window.location.hash.replace('#', '')) {
		closePrevTab();
	}
};

export const renderFullGame = (res, id) => {
	const markup = `
	<div class="games-list__video">
		${res.find((el) => el.id === id).embed}
	</div>
	`;
	document.querySelector(`.games-list__item[href*="${id}"]`).insertAdjacentHTML('beforeend', markup);
};
