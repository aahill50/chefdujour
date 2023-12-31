import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { StoreType } from './types';

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

//recipe list to use for testing
const defaultCookbook = {
    320835: {
        id: 320835,
        title: 'Straight-Up with a Pig Patty Burger',
        image: 'https://spoonacular.com/recipeImages/320835-312x231.jpeg',
        imageType: 'jpeg',
        usedIngredientCount: 7,
        missedIngredientCount: 10,
        missedIngredients: [
            {
                id: 10123,
                amount: 12,
                unit: 'ounces',
                unitLong: 'ounces',
                unitShort: 'oz',
                aisle: 'Meat',
                name: 'applewood bacon',
                original: '12 ounces thinly sliced applewood smoked bacon',
                originalName: 'thinly sliced applewood smoked bacon',
                meta: ['smoked', 'thinly sliced'],
                extendedName: 'smoked applewood bacon',
                image: 'https://spoonacular.com/cdn/ingredients_100x100/raw-bacon.png',
            },
            {
                id: 6970,
                amount: 0.25,
                unit: 'cup',
                unitLong: 'cups',
                unitShort: 'cup',
                aisle: 'Canned and Jarred',
                name: 'chicken broth',
                original:
                    '1/4 cup low-sodium chicken broth mixed with 2 tablespoons water',
                originalName:
                    'low-sodium chicken broth mixed with 2 tablespoons water',
                meta: ['mixed', 'with 2 tablespoons water', 'low-sodium'],
                extendedName: 'low sodium mixed chicken broth',
                image: 'https://spoonacular.com/cdn/ingredients_100x100/chicken-broth.png',
            },
            {
                id: 10011937,
                amount: 1,
                unit: '',
                unitLong: '',
                unitShort: '',
                aisle: 'Canned and Jarred',
                name: 'kosher dill pickle',
                original: '1 kosher dill pickle, finely sliced',
                originalName: 'kosher dill pickle, finely sliced',
                meta: ['finely sliced'],
                image: 'https://spoonacular.com/cdn/ingredients_100x100/dill-pickles.jpg',
            },
            {
                id: 10023572,
                amount: 32,
                unit: 'ounces',
                unitLong: 'ounces',
                unitShort: 'oz',
                aisle: 'Meat',
                name: 'ground beef',
                original: '32 ounces ground beef (80/20 blend)',
                originalName: 'ground beef (80/20 blend)',
                meta: ['()'],
                image: 'https://spoonacular.com/cdn/ingredients_100x100/fresh-ground-beef.jpg',
            },
            {
                id: 11252,
                amount: 0.25,
                unit: 'head',
                unitLong: 'heads',
                unitShort: 'head',
                aisle: 'Produce',
                name: 'iceberg lettuce',
                original: '1/4 head iceberg lettuce, finely sliced',
                originalName: 'iceberg lettuce, finely sliced',
                meta: ['finely sliced'],
                image: 'https://spoonacular.com/cdn/ingredients_100x100/iceberg-lettuce.jpg',
            },
            {
                id: 4025,
                amount: 1,
                unit: 'cup',
                unitLong: 'cup',
                unitShort: 'cup',
                aisle: 'Condiments',
                name: 'mayonnaise',
                original: '1 cup prepared mayonnaise',
                originalName: 'prepared mayonnaise',
                meta: ['prepared'],
                extendedName: 'cooked mayonnaise',
                image: 'https://spoonacular.com/cdn/ingredients_100x100/mayonnaise.png',
            },
            {
                id: 1042046,
                amount: 1,
                unit: 'teaspoon',
                unitLong: 'teaspoon',
                unitShort: 'tsp',
                aisle: 'Condiments',
                name: 'regular mustard',
                original: '1 teaspoon regular yellow mustard',
                originalName: 'regular yellow mustard',
                meta: ['yellow'],
                extendedName: 'yellow regular mustard',
                image: 'https://spoonacular.com/cdn/ingredients_100x100/regular-mustard.jpg',
            },
            {
                id: 2025,
                amount: 1,
                unit: 'pinch',
                unitLong: 'pinch',
                unitShort: 'pinch',
                aisle: 'Spices and Seasonings',
                name: 'nutmeg',
                original: 'Pinch grated nutmeg',
                originalName: 'Pinch grated nutmeg',
                meta: ['grated'],
                image: 'https://spoonacular.com/cdn/ingredients_100x100/ground-nutmeg.jpg',
            },
            {
                id: 11294,
                amount: 0.5,
                unit: '',
                unitLong: '',
                unitShort: '',
                aisle: 'Produce',
                name: 'vidalia onion',
                original: '1/2 Vidalia onion, very finely sliced',
                originalName: 'Vidalia onion, very finely sliced',
                meta: ['very finely sliced'],
                image: 'https://spoonacular.com/cdn/ingredients_100x100/sweet-onion.png',
            },
            {
                id: 6971,
                amount: 4,
                unit: 'dashes',
                unitLong: 'dashes',
                unitShort: 'dashes',
                aisle: 'Condiments',
                name: 'worcestershire sauce',
                original: '4 dashes Worcestershire sauce',
                originalName: 'Worcestershire sauce',
                meta: [],
                image: 'https://spoonacular.com/cdn/ingredients_100x100/dark-sauce.jpg',
            },
        ],
        usedIngredients: [
            {
                id: 1253,
                amount: 3,
                unit: 'ounces',
                unitLong: 'ounces',
                unitShort: 'oz',
                aisle: 'Cheese',
                name: 'american cheese',
                original: '3 ounces grated yellow American cheese',
                originalName: 'grated yellow American cheese',
                meta: ['yellow', 'grated'],
                extendedName: 'yellow american cheese',
                image: 'https://spoonacular.com/cdn/ingredients_100x100/american-cheese.jpg',
            },
            {
                id: 18350,
                amount: 4,
                unit: '',
                unitLong: '',
                unitShort: '',
                aisle: 'Bakery/Bread',
                name: 'brioche hamburger buns',
                original: '4 soft brioche hamburger buns, cut in half',
                originalName: 'soft brioche hamburger buns, cut in half',
                meta: ['soft', 'cut in half'],
                image: 'https://spoonacular.com/cdn/ingredients_100x100/hamburger-bun.jpg',
            },
            {
                id: 11215,
                amount: 2,
                unit: 'heads',
                unitLong: 'heads',
                unitShort: 'heads',
                aisle: 'Produce',
                name: 'garlic',
                original: '2 heads garlic',
                originalName: 'garlic',
                meta: [],
                image: 'https://spoonacular.com/cdn/ingredients_100x100/garlic.png',
            },
            {
                id: 10811529,
                amount: 1,
                unit: '',
                unitLong: '',
                unitShort: '',
                aisle: 'Produce',
                name: 'heirloom tomato',
                original: '1 heirloom tomato, finely sliced',
                originalName: 'heirloom tomato, finely sliced',
                meta: ['finely sliced'],
                image: 'https://spoonacular.com/cdn/ingredients_100x100/tomato.png',
            },
            {
                id: 10311215,
                amount: 0.25,
                unit: 'cup',
                unitLong: 'cups',
                unitShort: 'cup',
                aisle: 'Produce',
                name: 'roasted garlic',
                original: '1/4 cup roasted garlic',
                originalName: 'roasted garlic',
                meta: [],
                image: 'https://spoonacular.com/cdn/ingredients_100x100/garlic-roasted.jpg',
            },
            {
                id: 1145,
                amount: 2,
                unit: 'tablespoons',
                unitLong: 'tablespoons',
                unitShort: 'Tbsp',
                aisle: 'Milk, Eggs, Other Dairy',
                name: 'butter',
                original: '2 tablespoons unsalted butter',
                originalName: 'unsalted butter',
                meta: ['unsalted'],
                extendedName: 'unsalted butter',
                image: 'https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg',
            },
            {
                id: 1011077,
                amount: 1,
                unit: 'cup',
                unitLong: 'cup',
                unitShort: 'cup',
                aisle: 'Milk, Eggs, Other Dairy',
                name: 'milk',
                original: '1 cup whole milk, warmed',
                originalName: 'whole milk, warmed',
                meta: ['whole', 'warmed'],
                extendedName: 'whole milk',
                image: 'https://spoonacular.com/cdn/ingredients_100x100/milk.png',
            },
        ],
        unusedIngredients: [
            {
                id: 1082,
                amount: 1,
                unit: '',
                unitLong: '',
                unitShort: '',
                aisle: 'Milk, Eggs, Other Dairy',
                name: 'percent milk',
                original: '1 percent milk',
                originalName: 'percent milk',
                meta: [],
                image: 'https://spoonacular.com/cdn/ingredients_100x100/milk.png',
            },
            {
                id: 1090,
                amount: 1,
                unit: 'serving',
                unitLong: 'serving',
                unitShort: 'serving',
                aisle: 'Baking',
                name: 'powdered milk',
                original: 'powdered milk',
                originalName: 'powdered milk',
                meta: [],
                image: 'https://spoonacular.com/cdn/ingredients_100x100/milk-powdered.jpg',
            },
            {
                id: 1082,
                amount: 2,
                unit: '',
                unitLong: '',
                unitShort: '',
                aisle: 'Milk, Eggs, Other Dairy',
                name: 'percent milk',
                original: '2 percent milk',
                originalName: 'percent milk',
                meta: [],
                image: 'https://spoonacular.com/cdn/ingredients_100x100/milk.png',
            },
            {
                id: 6159,
                amount: 1,
                unit: 'serving',
                unitLong: 'serving',
                unitShort: 'serving',
                aisle: 'Canned and Jarred',
                name: 'tomato soup',
                original: 'tomato soup',
                originalName: 'tomato soup',
                meta: [],
                image: 'https://spoonacular.com/cdn/ingredients_100x100/tomato-soup.png',
            },
            {
                id: 19081,
                amount: 1,
                unit: 'serving',
                unitLong: 'serving',
                unitShort: 'serving',
                aisle: 'Sweet Snacks',
                name: 'milk chocolate',
                original: 'milk chocolate',
                originalName: 'milk chocolate',
                meta: [],
                image: 'https://spoonacular.com/cdn/ingredients_100x100/milk-chocolate.jpg',
            },
            {
                id: 19135,
                amount: 1,
                unit: 'serving',
                unitLong: 'serving',
                unitShort: 'serving',
                aisle: 'Sweet Snacks',
                name: 'milky way',
                original: 'milky way',
                originalName: 'milky way',
                meta: [],
                image: 'https://spoonacular.com/cdn/ingredients_100x100/milky-way.png',
            },
            {
                id: 93611,
                amount: 1,
                unit: 'serving',
                unitLong: 'serving',
                unitShort: 'serving',
                aisle: 'Milk, Eggs, Other Dairy',
                name: 'kefir',
                original: 'kefir',
                originalName: 'kefir',
                meta: [],
                image: 'https://spoonacular.com/cdn/ingredients_100x100/buttermilk.jpg',
            },
            {
                id: 10016223,
                amount: 1,
                unit: 'serving',
                unitLong: 'serving',
                unitShort: 'serving',
                aisle: null,
                name: 'milk substitute',
                original: 'milk substitute',
                originalName: 'milk substitute',
                meta: [],
                image: 'https://spoonacular.com/cdn/ingredients_100x100/no.jpg',
            },
            {
                id: 10099278,
                amount: 1,
                unit: 'serving',
                unitLong: 'serving',
                unitShort: 'serving',
                aisle: 'Baking',
                name: 'milk chocolate chips',
                original: 'milk chocolate chips',
                originalName: 'milk chocolate chips',
                meta: [],
                image: 'https://spoonacular.com/cdn/ingredients_100x100/chocolate-chips.jpg',
            },
            {
                id: 10118157,
                amount: 1,
                unit: 'serving',
                unitLong: 'serving',
                unitShort: 'serving',
                aisle: 'Sweet Snacks',
                name: 'chocolate wafer cookies',
                original: 'chocolate wafer cookies',
                originalName: 'chocolate wafer cookies',
                meta: [],
                image: 'https://spoonacular.com/cdn/ingredients_100x100/chocolate-wafer-cookies.jpg',
            },
        ],
        likes: 10,
    },
};

export const useStore = create<StoreType>()(
    subscribeWithSelector((set, get) => ({
        activeTab: null,
        cookbook: { ...defaultCookbook },
        pantry: { ...defaultPantry },
        ingredientSearch: '',
        ingredientSearchResults: [],
        recipeInfo: null,
        recipeSearchResults: [],
        shoppingList: { ...defaultShoppingList },
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
        getRecipeInfo: (recipeId) => {
            fetch(`/api/search?queryType=recipeInfo&recipeId=${recipeId}`, {
                headers: {
                    Accept: 'application/json',
                },
            })
                .then((res) => res.json())
                .then((res) => {
                    get().setRecipeInfo(res);
                });
        },
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
        setActiveTab: (activeTab) => set({ activeTab }),
        setIngredientSearch: (ingredientSearch) => set({ ingredientSearch }),
        setIngredientSearchResults: (ingredientSearchResults) =>
            set({ ingredientSearchResults }),
        setRecipeInfo: (recipeInfo) => set({ recipeInfo }),
        setRecipeSearchResults: (recipeSearchResults) =>
            set({
                recipeSearchResults,
            }),
    }))
);
