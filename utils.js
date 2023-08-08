import { useStore } from './store';

const apiImgRoot = 'https://spoonacular.com/cdn/ingredients_100x100';

const ingredientImage = (ingredient) => `${apiImgRoot}/${ingredient}`;
const getKey = (ingredient) => {
    const isInPantry = useStore.getState().isInPantry;
    const isInShoppingList = useStore.getState().isInShoppingList;
    const keyArray = [];

    if (isInPantry(ingredient)) {
        keyArray.push('inPantry');
    }

    if (isInShoppingList(ingredient)) {
        keyArray.push('inShoppingList');
    }

    keyArray.push(ingredient.id);
    
    return keyArray.join('-');
};

export { ingredientImage, getKey };
