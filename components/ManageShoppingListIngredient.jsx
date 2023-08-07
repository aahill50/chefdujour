import styles from '../pages/pantry.module.css';

export default function ManageShoppingListIngredient({
    handleAddToShoppingList,
    handleRemoveFromShoppingList,
    ingredient,
    isInShoppingList,
}) {
    return (
        <button
            className={styles.addToShoppingList}
            onClick={(e) =>
                isInShoppingList
                    ? handleRemoveFromShoppingList(e, ingredient)
                    : handleAddToShoppingList(e, ingredient)
            }
        >
            {isInShoppingList
                ? 'Remove from Shopping List'
                : 'Add to Shopping List'}
        </button>
    );
}
