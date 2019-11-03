import uniqid from 'uniqid';

const convertDate = (date) => {
	const year = date.split('').slice(0, 4).join('');
	const month = date.split('').slice(5, 7).join('');
	const day = date.split('').slice(8, 10).join('');
	const time = date.split('').slice(11, 16).join('');
	const fullDate = `${day}-${month}-${year} ${time}`;
	return fullDate;
};
const renderGame = (game) => {
	convertDate(game.date);
	const markup = `
        <li>
            <a class="games-list__item" href="#${game.id}">
                <div class="games-list__title">${game.title}</div>
                <div class="games-list__league">${game.competition.name}</div>
                <div class="games-list__date">${convertDate(game.date)}</div>
            </a>
        </li>
        `;
	document.querySelector('.games-list').insertAdjacentHTML('beforeend', markup);
};

export const renderGamesList = (games) => {
	games.forEach((el) => {
		el.id = uniqid();
	});
	games.forEach(renderGame);
};
