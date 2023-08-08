import { useStore } from '../store';
import styles from '../pages/pantry.module.css';

export default function ManagePantryIngredient({ ingredient }) {
    const addToPantry = useStore((state) => state.addToPantry);
    const removeFromPantry = useStore((state) => state.removeFromPantry);
    const isInPantry = useStore((state) => state.isInPantry);

    return (
        <button
            className={styles.addToPantry}
            onClick={(e) =>
                isInPantry(ingredient)
                    ? removeFromPantry(ingredient)
                    : addToPantry(ingredient)
            }
        >
            {isInPantry(ingredient) ? 'Remove from Pantry' : 'Add to Pantry'}
        </button>
    );
}
