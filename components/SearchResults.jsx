import clsx from 'clsx';
import Ingredient from './Ingredient';
import { useStore } from '../store';
import { getKey, subscribeToChanges } from '../utils';

export default function SearchResults({ onClickIngredient }) {
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
                { 'p-2': hasResults },
                { 'pt-6': hasResults },
                { 'border-2': hasResults },
                'flex',
                'flex-wrap',
                'relative',
                'shadow-2xl',
                'bg-stark-white',
                'rounded-lg',
                'border-teal',
                'z-10',
                'mb-4'
            )}
        >
            <button
                role='close'
                className={clsx(
                    'absolute',
                    'right-2',
                    'top-0',
                    'text-3xl',
                    'font-mono',
                    'font-bold'
                )}
                onClick={onCloseSearchResults}
            >
                x
            </button>
            {results.map((result) => {
                return (
                    <li
                        key={getKey(result)}
                        className={clsx('flex', 'hover:cursor-pointer', 'm-1')}
                        onClick={(e) => onClickIngredient(result)}
                    >
                        <div
                            className={clsx(
                                'bg-white',
                                'col-span-4',
                                'border-teal',
                                'first:border-t',
                                'border-b',
                                'border-r',
                                'border-l',
                                'overflow-hidden',
                                'rounded-full'
                            )}
                        >
                            <Ingredient ingredient={result} />
                        </div>
                        <div
                            className={clsx(
                                'col-span-2',
                                'flex',
                                'flex-col',
                                'self-center'
                            )}
                        ></div>
                    </li>
                );
            })}
        </ul>
    ) : null;
}
