import Ingredient from './Ingredient';
import ManagePantryIngredient from './ManagePantryIngredient';
import ManageShoppingListIngredient from './ManageShoppingListIngredient';
import usePantryIngredients from '../hooks/usePantryIngredients';
import styles from '../pages/pantry.module.css';

export default function PantryIngredients({
    handleAddToPantry,
    handleAddToShoppingList,
    handleRemoveFromPantry,
    handleRemoveFromShoppingList,
    _isInPantry,
    _isInShoppingList,
}) {
    const { pantryIngredients } = usePantryIngredients();
    
    return (
        <>
            <h2>Items in Pantry:</h2>
            <ul>
                {Object.entries(pantryIngredients).map(
                    ([ingredientId, ingredient]) => {
                        return (
                            <li key={ingredientId}>
                                <Ingredient
                                    classname={styles.ingredientImage}
                                    ingredient={ingredient}
                                />
                                <ManagePantryIngredient
                                    handleAddToPantry={handleAddToPantry}
                                    handleRemoveFromPantry={
                                        handleRemoveFromPantry
                                    }
                                    ingredient={ingredient}
                                    isInPantry={_isInPantry(ingredient)}
                                />
                                <ManageShoppingListIngredient
                                    handleAddToShoppingList={
                                        handleAddToShoppingList
                                    }
                                    handleRemoveFromShoppingList={
                                        handleRemoveFromShoppingList
                                    }
                                    ingredient={ingredient}
                                    isInShoppingList={_isInShoppingList(
                                        ingredient
                                    )}
                                />
                            </li>
                        );
                    }
                )}
            </ul>
            {JSON.stringify(pantryIngredients)}
        </>
    );
}
