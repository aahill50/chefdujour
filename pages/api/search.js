const apiRoot = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';

function getRecipeSearchParams(params) {
    // addRecipeInformation = If set to true, you get more information about the recipes returned. This saves the calls to get recipe information.
    // ignorePantry =  Whether to ignore typical pantry items, such as water, salt, flour, etc.
    // instructionsRequired = Whether the recipes must have instructions.
    // number = The number of results to return (1-100)
    // ranking = Whether to minimize missing ingredients (0), maximize used ingredients (1) first, or rank recipes by relevance (2).

    // cuisine = The cuisine(s) of the recipes. One or more (comma separated) of the following: african, chinese, japanese, korean, vietnamese, thai, indian, british, irish, french, italian, mexican, spanish, middle eastern, jewish, american, cajun, southern, greek, german, nordic, eastern european, caribbean, or latin american.
    // excludeCuisine = cuisines to exclude (can use same list as above)
    // diet = The diet to which the recipes must be compliant. Possible values are: pescetarian, lacto vegetarian, ovo vegetarian, vegan, paleo, primal, and vegetarian
    // intolerances = A comma-separated list of intolerances. All found recipes must not have ingredients that could cause problems for people with one of the given tolerances. Possible values are: dairy, egg, gluten, peanut, sesame, seafood, shellfish, soy, sulfite, tree nut, and wheat.
    // includeIngredients = A comma-separated list of ingredients that should/must be contained in the recipe.
    // excludeIngredients = An comma-separated list of ingredients that must not be contained in the recipes.
    // type = The type of the recipes. One of the following: main course, side dish, dessert, appetizer, salad, bread, breakfast, soup, beverage, sauce, or drink.
    // sort = The strategy to sort recipes by. See the full list of supported sorting options.
    // sortDirection = asc or desc

    const recipeSearchParams = {
        addRecipeInformation: 'true',
        ignorePantry: 'true',
        instructionsRequired: 'true',
        number: 10,
        ranking: 0,
    };

    const paramsArray = Object.entries(recipeSearchParams).map(
        ([paramKey, paramValue]) => {
            return `${paramKey}=${paramValue}`;
        }
    );

    return paramsArray.join('&');
}

function getUrlByQueryType(queryType, params) {
    const { recipeId, ingredient, ingredientId, ingredients, recipeSearch } =
        params;
    switch (queryType) {
        case 'ingredientDetail':
            return `${apiRoot}/food/ingredients/${ingredientId}/information`;
        case 'ingredientSearch':
            return `${apiRoot}/food/ingredients/search?query=${ingredient}`;
        case 'recipeSearchByIngredient':
            return `${apiRoot}/recipes/findByIngredients?ingredients=${ingredients}&ranking=1`;
        case 'recipeSearch':
            return `${apiRoot}/recipes/complexSearch/?query=${recipeSearch}&${getRecipeSearchParams(
                params
            )}`;
        case 'recipeInfo':
            return `${apiRoot}/recipes/${recipeId}/information`;
    }
}

const headers = new Headers({
    'X-RapidAPI-Key': process.env.X_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.X_RAPID_API_HOST,
});

export default async function serverSideCall(req, res) {
    const {
        query: { queryType, ...params },
    } = req;

    const url = getUrlByQueryType(queryType, { ...params });
    console.log('url:', url);

    return fetch(url, { headers })
        .then((res) => res.json())
        .then((data) => {
            res.end(JSON.stringify(data));
        })
        .catch((e) => {
            console.log('error occurred:', e);
        });
}
