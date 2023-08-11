import { ingredientImage, toTitleCase } from '../utils';

export default function Ingredient({ children, ingredient }) {
    return (
        <div className='flex flex-row mx-6x  h-16 w-600 max-w-md'>
            <img
                className={`p-2 bg-stark-white w-16 object-contain`}
                src={ingredientImage(ingredient.image)}
            />
            <span className={`font-sans text-lg w-autoflex-1 ml-4 self-center`}>
                {toTitleCase(ingredient.name)}
            </span>
            <div className={'flex-1'}>{children}</div>
        </div>
    );
}
