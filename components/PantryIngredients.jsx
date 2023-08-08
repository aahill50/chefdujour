import { useCallback } from 'react';
import { useStore } from '../store';
import { getKey } from '../utils';
import Ingredient from './Ingredient';
import ManagePantryIngredient from './ManagePantryIngredient';
import ManageShoppingListIngredient from './ManageShoppingListIngredient';
import styles from '../pages/pantry.module.css';

export default function PantryIngredients() {
    const pantry = useStore((state) => state.pantry);
    const shoppingList = useStore((state) => state.shoppingList);

    return (
        <>
            <h2>Items in Pantry:</h2>
            <ul>
                {Object.values(pantry).map((ingredient) => {
                    return (
                        <li key={getKey(ingredient)}>
                            <Ingredient
                                classname={styles.ingredientImage}
                                ingredient={ingredient}
                            />
                            <ManagePantryIngredient ingredient={ingredient} />
                            <ManageShoppingListIngredient
                                ingredient={ingredient}
                            />
                        </li>
                    );
                })}
            </ul>
            {JSON.stringify(pantry)}
        </>
    );
}
