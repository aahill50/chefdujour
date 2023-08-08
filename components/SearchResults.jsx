import Ingredient from './Ingredient';
import ManagePantryIngredient from './ManagePantryIngredient';
import { useStore } from '../store';
import styles from '../pages/pantry.module.css';

export default function SearchResults({ results = [] }) {
    const isInPantry = useStore((state) => state.isInPantry);

    return (
        <ul>
            {results.map((result) => {
                return (
                    <li
                        className={styles.searchResult}
                        key={
                            isInPantry(result)
                                ? `in-pantry-${result.id}`
                                : result.id
                        }
                    >
                        <Ingredient
                            classname={styles.ingredientImage}
                            ingredient={result}
                        />
                        <ManagePantryIngredient
                            ingredient={result}
                            isInPantry={isInPantry(result)}
                        />
                    </li>
                );
            })}
        </ul>
    );
}
