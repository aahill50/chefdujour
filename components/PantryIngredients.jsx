import Ingredient from './Ingredient';
import ManagePantryIngredient from './ManagePantryIngredient';
import styles from '../pages/pantry.module.css';

export default function PantryIngredients({
    handleAddToPantry,
    handleRemoveFromPantry,
    pantryIngredients,
    _isInPantry,
}) {
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
                            </li>
                        );
                    }
                )}
            </ul>
            {JSON.stringify(pantryIngredients)}
        </>
    );
}
