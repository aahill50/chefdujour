import styles from '../pages/pantry.module.css';

export default function ManagePantryIngredient({
    handleAddToPantry,
    handleRemoveFromPantry,
    ingredient,
    isInPantry,
}) {
    return (
        <button
            className={styles.addToPantry}
            onClick={(e) =>
                isInPantry
                    ? handleRemoveFromPantry(e, ingredient)
                    : handleAddToPantry(e, ingredient)
            }
        >
            {isInPantry ? 'Remove from Pantry' : 'Add to Pantry'}
        </button>
    );
}
