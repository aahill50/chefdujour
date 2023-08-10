import Ingredient from './Ingredient';
import ManagePantryIngredient from './ManagePantryIngredient';
import { useStore } from '../store';
import { getKey, subscribeToChanges } from '../utils';
import ManageShoppingListIngredient from './ManageShoppingListIngredient';

export default function SearchResults() {
    const results = useStore((state) => state.ingredientSearchResults);
    const unsub = subscribeToChanges(['pantry', 'shoppingList']);

    // unsub();

    return (
        <ul className='grid grid-cols-1 gap-0 max-w-md'>
            {results.map((result) => {
                return (
                    <li
                        key={getKey(result)}
                        className='grid grid-cols-5 odd:bg-white even:bg-stark-white hover:shadow-xl hover:cursor-pointer'
                    >
                        <div className='col-span-4'>
                            <Ingredient ingredient={result} />
                        </div>
                        <div className='col-span-1'>
                            <ManagePantryIngredient ingredient={result} />
                            <ManageShoppingListIngredient ingredient={result} />
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}
