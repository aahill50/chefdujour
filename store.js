import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

// pantry to use for testing!
const defaultPantry = {
    1001: { id: 1001, name: 'butter', image: 'butter-sliced.jpg' },
    1077: { id: 1077, name: 'milk', image: 'milk.png' },
    1253: { id: 1253, name: 'american cheese', image: 'american-cheese.jpg' },
    6159: { id: 6159, name: 'tomato soup', image: 'tomato-soup.png' },
    11215: { id: 11215, name: 'garlic', image: 'garlic.png' },
    11529: { id: 11529, name: 'tomato', image: 'tomato.png' },
    18064: { id: 18064, name: 'bread', image: 'white-bread.jpg' },
    20581: {
        id: 20581,
        name: 'unbleached all purpose flour',
        image: 'flour.png',
    },
};

// shopping list to use for testing!
const defaultShoppingList = {
    1001: { id: 1001, name: 'butter', image: 'butter-sliced.jpg' },
    1077: { id: 1077, name: 'milk', image: 'milk.png' },
};

export const useStore = create(
    subscribeWithSelector((set, get) => ({
        activeTab: null,
        cookbook: {},
        pantry: { ...defaultPantry },
        ingredientSearch: '',
        ingredientSearchResults: [],
        recipeSearch: '',
        recipeSearchResults: [],
        shoppingList: { ...defaultShoppingList },
        isInCookbook: (recipe) => !!get().cookbook[recipe.id],
        addToPantry: (ingredient) =>
            set({
                pantry: {
                    ...get().pantry,
                    [ingredient.id]: ingredient,
                },
            }),
        addToShoppingList: (ingredient) =>
            set({
                shoppingList: {
                    ...get().shoppingList,
                    [ingredient.id]: ingredient,
                },
            }),
        removeFromPantry: (ingredient) => {
            const { [ingredient.id]: value, ...rest } = get().pantry;
            return set({ pantry: rest });
        },
        removeFromShoppingList: (ingredient) => {
            const { [ingredient.id]: value, ...rest } = get().shoppingList;
            return set({ shoppingList: rest });
        },
        searchForIngredient: () => {
            fetch(
                `/api/search?queryType=ingredientSearch&ingredient=${
                    get().ingredientSearch
                }`,
                {
                    headers: {
                        Accept: 'application/json',
                    },
                }
            )
                .then((res) => res.json())
                .then((res) => {
                    get().setIngredientSearchResults(res.results);
                });
        },
        searchForRecipe: () => {
            const ingredientsString = Object.values(get().pantry)
                .map((ingredient) => ingredient.name)
                .join(',');

            fetch(
                `/api/search?queryType=recipeSearchByIngredient&ingredients=${encodeURI(
                    ingredientsString
                )}`,
                {
                    headers: {
                        Accept: 'application/json',
                    },
                }
            )
                .then((res) => res.json())
                .then((res) => {
                    get().setRecipeSearchResults(res);
                });
        },
        setIngredientSearch: (ingredientSearch) => set({ ingredientSearch }),
        setIngredientSearchResults: (ingredientSearchResults) =>
            set({ ingredientSearchResults }),
        setRecipeSearchResults: (recipeSearchResults) =>
            set({
                recipeSearchResults,
            }),
        setActiveTab: (activeTab) => set({ activeTab }),
    }))
);
