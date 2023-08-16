import clsx from 'clsx';
import { ingredientImage, toTitleCase } from '../utils';

export default function Ingredient({ children, ingredient }) {
    return ingredient ? (
        <div className='flex flex-row mx-6x  h-12 w-600 max-w-md'>
            <img
                className={clsx(
                    'p-1',
                    'bg-stark-white',
                    'rounded-full',
                    'rounded-r-none'
                )}
                src={ingredientImage(ingredient.image)}
            />
            <span className={`font-sans w-autoflex-1 mx-4 self-center`}>
                {toTitleCase(ingredient.name)}
            </span>
            {children ? <div className='self-center'>{children}</div> : null}
        </div>
    ) : null;
}
