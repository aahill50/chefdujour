import { useState } from 'react';

// shopping list to use for testing!
const defaultShoppingList = {
    1001: { id: 1001, name: 'butter', image: 'butter-sliced.jpg' },
    1077: { id: 1077, name: 'milk', image: 'milk.png' },
};

export default function useShoppingList() {
    const [shoppingList, setShoppingList] = useState(defaultShoppingList);
    console.log('shopping list:', shoppingList);

    const _isInShoppingList = (ingredient) => !!shoppingList[ingredient.id];

    return { _isInShoppingList, shoppingList, setShoppingList };
}
