import clsx from 'clsx';
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
            <ul className={clsx('grid', 'grid-cols-1', 'gap-8d', 'max-w-lg')}>
                {Object.values(pantry).map((ingredient) => {
                    return (
                        <li
                            key={getKey(ingredient)}
                            className={clsx(
                                'grid',
                                'grid-cols-6',
                                'hover:cursor-pointer',
                                'h-16'
                                )}
                                >
                            <div
                                className={clsx(
                                    'bg-white',
                                    'col-span-4',
                                    'border-teal',
                                    'first:border-t',
                                    'border-b',
                                    'border-r',
                                    'border-l'
                                )}
                            >
                                <Ingredient ingredient={ingredient} />
                            </div>
                            <div
                                className={clsx(
                                    'col-span-2',
                                    'flex',
                                    'flex-col',
                                    'pl-2',
                                    'self-center'
                                )}
                            >
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
