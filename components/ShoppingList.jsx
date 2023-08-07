import Ingredient from './Ingredient';
import ManageShoppingListIngredient from './ManageShoppingListIngredient';
import useShoppingList from '../hooks/useShoppingList';
import styles from '../pages/pantry.module.css';

export default function ShoppingList({
    handleAddToShoppingList,
    handleRemoveFromShoppingList,
}) {
    const { _isInShoppingList, shoppingList } = useShoppingList();
    console.log('shopping list:', shoppingList);
    return (
        <>
            <h2>Items on Shopping List:</h2>
            <ul>
                {Object.entries(shoppingList).map(
                    ([ingredientId, ingredient]) => {
                        return (
                            <li key={ingredientId}>
                                <Ingredient
                                    classname={styles.ingredientImage}
                                    ingredient={ingredient}
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
            {JSON.stringify(shoppingList)}
        </>
    );
}
