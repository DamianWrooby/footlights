const resultsArr = Array.from(document.querySelectorAll('.games-list__item'));

export const highlightSelected = (id) => {
	resultsArr.forEach((el) => {
		el.classList.remove('games-list__item--active');
	});
	document.querySelector(`.games-list__item[href*="${id}"]`).classList.add('games-list__item--active');
};

const findObjById = (arr, id) => {
	return arr.find((el) => el.id === id);
};

export const closeCurrTab = () => {
	//resultsArr.forEach((el) => {
	//	el.removeChild.querySelector('.games-list__video');
	//});
	if (document.querySelector('.games-list__video')) {
		document.querySelector('.games-list__video').remove();
	}
};

export const renderFullGame = (res, id) => {
	const markup = `
            <div class="games-list__video">
                ${findObjById(res, id).embed}
            </div>
			`;
	document.querySelector(`.games-list__item[href*="${id}"]`).insertAdjacentHTML('beforeend', markup);
};
