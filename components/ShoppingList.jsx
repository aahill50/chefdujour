import { useCallback } from 'react';
import { useStore } from '../store';
import { getKey } from '../utils';
import Ingredient from './Ingredient';
import ManageShoppingListIngredient from './ManageShoppingListIngredient';
import styles from '../pages/pantry.module.css';

export default function ShoppingList() {
    const shoppingList = useStore((state) => state.shoppingList);
    const isInShoppingList = useStore((state) => state.isInShoppingList);

    return (
        <>
            <h2>Items on Shopping List:</h2>
            <ul>
                {Object.entries(shoppingList).map(
                    ([ingredientId, ingredient]) => {
                        return (
                            <li key={getKey(ingredient)}>
                                <Ingredient
                                    classname={styles.ingredientImage}
                                    ingredient={ingredient}
                                />
                                <ManageShoppingListIngredient
                                    ingredient={ingredient}
                                />
                            </li>
                        );
                    }
                )}
            </ul>
        </>
    );
}
