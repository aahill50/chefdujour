import { useState } from 'react';

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

export default function usePantryIngredients() {
    const [pantryIngredients, setPantryIngredients] = useState(defaultPantry);

    return { pantryIngredients, setPantryIngredients };
}
