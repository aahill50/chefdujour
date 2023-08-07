import Ingredient from './Ingredient';
import ManagePantryIngredient from './ManagePantryIngredient';
import styles from '../pages/pantry.module.css';

export default function SearchResults({
    _isInPantry,
    handleAddToPantry,
    handleRemoveFromPantry,
    pantryIngredients,
    results = [],
}) {
    return (
        <ul>
            {results.map((result) => {
                return (
                    <li
                        className={styles.searchResult}
                        key={
                            _isInPantry(result)
                                ? `in-pantry-${result.id}`
                                : result.id
                        }
                    >
                        <Ingredient
                            classname={styles.ingredientImage}
                            ingredient={result}
                        />
                        <ManagePantryIngredient
                            handleAddToPantry={handleAddToPantry}
                            handleRemoveFromPantry={handleRemoveFromPantry}
                            ingredient={result}
                            isInPantry={_isInPantry(result)}
                        />
                    </li>
                );
            })}
        </ul>
    );
}
