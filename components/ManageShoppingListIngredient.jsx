import { useStore } from '../store';
import styles from '../pages/pantry.module.css';

export default function ManageShoppingListIngredient({ ingredient }) {
    const addToShoppingList = useStore((state) => state.addToShoppingList);
    const removeFromShoppingList = useStore(
        (state) => state.removeFromShoppingList
    );
    const isInShoppingList = useStore((state) => state.isInShoppingList);
    const handler = (e) => {
        e.preventDefault();
        isInShoppingList(ingredient)
            ? removeFromShoppingList(ingredient)
            : addToShoppingList(ingredient);
    };

    const copy = isInShoppingList(ingredient)
        ? 'Remove from Shopping List'
        : 'Add to Shopping List';

    return (
        <button className={styles.addToShoppingList} onClick={handler}>
            {copy}
        </button>
    );
}
