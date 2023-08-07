const apiImgRoot = 'https://spoonacular.com/cdn/ingredients_100x100';

export default {
    ingredientImage: (ingredient) => `${apiImgRoot}/${ingredient}`,
};
