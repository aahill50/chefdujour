import clsx from 'clsx';
import { useStore } from '../store';
import { getKey } from '../utils';
import Ingredient from './Ingredient';
import ManageShoppingListIngredient from './ManageShoppingListIngredient';

export default function ShoppingList() {
    const shoppingList = useStore((state) => state.shoppingList);

    return (
        <>
            <h2>Items on Shopping List:</h2>
            <ul className={clsx('grid', 'grid-cols-1', 'gap-8d', 'max-w-lg')}>
                {Object.values(shoppingList).map((ingredient) => {
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
