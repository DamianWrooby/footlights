
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
            <a class="">
                <p>${game.title}</p>
            </a>
        </li>
        `;
    document.getElementById('app').insertAdjacentHTML('beforeend', markup);
};

export const renderGamesList = (games) => {
    games.forEach(renderGame);
};