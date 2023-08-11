import clsx from 'clsx';
import Ingredient from './Ingredient';
import ManagePantryIngredient from './ManagePantryIngredient';
import { useStore } from '../store';
import { getKey, subscribeToChanges } from '../utils';
import ManageShoppingListIngredient from './ManageShoppingListIngredient';

export default function SearchResults() {
    const results = useStore((state) => state.ingredientSearchResults);
    const setIngredientSearchResults = useStore(
        (state) => state.setIngredientSearchResults
    );
    const unsub = subscribeToChanges(['pantry', 'shoppingList']);

    unsub();

    const hasResults = !!results.length;

    const onCloseSearchResults = (e) => {
        setIngredientSearchResults([]);
    };

    return hasResults ? (
        <ul
            className={clsx(
                { 'p-6': hasResults },
                { 'border-2': hasResults },
                'grid',
                'grid-cols-1',
                'gap-8d',
                'max-w-lg',
                'absolute',
                'shadow-2xl',
                'bg-stark-white',
                'rounded',
                'border-teal',
                'z-10'
            )}
        >
            <button
                role='close'
                className={clsx(
                    'absolute',
                    'right-2',
                    'top-0',
                    'text-xl',
                    'font-mono',
                    'font-bold'
                )}
                onClick={onCloseSearchResults}
            >
                X
            </button>
            {results.map((result) => {
                return (
                    <li
                        key={getKey(result)}
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
                            <Ingredient ingredient={result} />
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
                            <ManagePantryIngredient ingredient={result} />
                            <ManageShoppingListIngredient ingredient={result} />
                        </div>
                    </li>
                );
            })}
        </ul>
    ) : null;
}
