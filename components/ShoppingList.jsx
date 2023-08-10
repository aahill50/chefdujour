import { useStore } from '../store';
import { getKey } from '../utils';
import Ingredient from './Ingredient';
import ManageShoppingListIngredient from './ManageShoppingListIngredient';

export default function ShoppingList() {
    const shoppingList = useStore((state) => state.shoppingList);

    return (
        <>
            <h2>Items on Shopping List:</h2>
            <ul className='grid grid-cols-1 gap-4'>
                {Object.values(shoppingList).map((ingredient) => {
                    return (
                        <li key={getKey(ingredient)}>
                            <Ingredient ingredient={ingredient}>
                                <ManageShoppingListIngredient
                                    ingredient={ingredient}
                                />
                            </Ingredient>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
