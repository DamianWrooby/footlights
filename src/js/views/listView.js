import uniqid from 'uniqid';

const renderGame = (game) => {
	const markup = `
        <li>
            <a class="games-list__item" href="#${game.id}">
                <div class="games-list__title">${game.title}</div>
                <div class="games-list__league">${game.competition.name}</div>
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
