export const highlightSelected = id => {
    const resultsArr = Array.from(document.querySelectorAll('.games-list__item'));
    resultsArr.forEach(el => {
        el.classList.remove('games-list__item--active');
    });
    document.querySelector(`.games-list__item[href*="${id}"]`).classList.add('games-list__item--active');
};

export const renderFullGame = id => {
    const resultsArr = Array.from(document.querySelectorAll('.games-list__video'));
    resultsArr.forEach(el => {
        el.classList.remove('games-list__video--active');
    });

    document.querySelector(`.games-list__item[href*="${id}"] ~ .games-list__video`).classList.add('games-list__video--active');
};