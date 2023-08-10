import { useCallback } from 'react';
import { useStore } from '../store';
import { getKey } from '../utils';
import Ingredient from './Ingredient';
import ManagePantryIngredient from './ManagePantryIngredient';
import ManageShoppingListIngredient from './ManageShoppingListIngredient';

export default function PantryIngredients() {
    const pantry = useStore((state) => state.pantry);
    const unsub = useStore.subscribe((state) => state.shoppingList);
    unsub();

    return (
        <>
            <h2>Items in Pantry:</h2>
            <ul className={`grid grid-cols-1 gap-4 max-w-md`}>
                {Object.values(pantry).map((ingredient) => {
                    return (
                        <li
                            key={getKey(ingredient)}
                            className='grid grid-cols-5 bg-salmon rounded-xl shadow-lg hover:shadow-xl hover:cursor-pointer overflow-hidden'
                        >
                            <div className='col-span-4'>
                                <Ingredient ingredient={ingredient} />
                            </div>
                            <div className='col-span-1'>
                                <ManagePantryIngredient
                                    ingredient={ingredient}
                                />
                                <ManageShoppingListIngredient
                                    ingredient={ingredient}
                                />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
