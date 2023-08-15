import clsx from 'clsx';
import { getKey } from '../utils';
import Ingredient from './Ingredient';

export default function IngredientList({ ingredients, renderChild }) {
    return (
        <>
            <ul className={clsx('flex', 'flex-wrap')}>
                {Object.values(ingredients).map((ingredient) => {
                    return (
                        <li
                            key={getKey(ingredient)}
                            className={clsx(
                                'flex',
                                'hover:cursor-pointer',
                                'rounded-full',
                                'm-1'
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
                                    'border-l',
                                    'overflow-hidden',
                                    'rounded-full'
                                )}
                            >
                                <Ingredient ingredient={ingredient}>
                                    {renderChild(ingredient)}
                                </Ingredient>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
