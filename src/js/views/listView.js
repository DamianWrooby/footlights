
const renderGame = game => {
    const markup = /*`
        <li>
            <a class="results__link" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="${recipe.title}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `*/
        `<li>
            <a class="games-list__item">
                <p>${game.title}</p>
                <figure class="game-list__thumbnail">
                <img src="${game.thumbnail}" alt="${game.title}">
                </figure>
            </a>
        </li>
        `;
    document.querySelector('.games-list').insertAdjacentHTML('beforeend', markup);
};

export const renderGamesList = (games) => {
    games.forEach(renderGame);
};