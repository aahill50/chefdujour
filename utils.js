import { useStore } from './store';
const noop = () => {};
const apiImgRoot = 'https://spoonacular.com/cdn/ingredients_100x100';

const ingredientImage = (ingredient) => `${apiImgRoot}/${ingredient}`;

const getKey = (ingredient) => {
    const pantry = useStore.getState().pantry;
    const shoppingList = useStore.getState().shoppingList;
    const keyArray = [];

    if (!!pantry[ingredient.id]) {
        keyArray.push('inPantry');
    }

    if (!!shoppingList[ingredient.id]) {
        keyArray.push('inShoppingList');
    }

    keyArray.push(ingredient.id);

    return keyArray.join('-');
};
const toTitleCase = (str) => {
    const words = str.split(' ');
    return words
        .map((word) => `${word.charAt(0).toUpperCase()}${word.substr(1)}`)
        .join(' ');
};

const subscribeToChanges = (selectors, callback) => {
    const unsubFns = selectors.map((selector) =>
        useStore.subscribe((state) => state[selector], (callback = noop))
    );

    // unsubscribe from all listeners simultaneously
    return () => {
        unsubFns.forEach((fn) => fn());
    };
};

export { ingredientImage, getKey, subscribeToChanges, toTitleCase };
