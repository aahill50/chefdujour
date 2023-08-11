import { ingredientImage } from '../utils';

export default function Recipe({ recipe }) {
    return (
        <div className='flex flex-row mx-6x h-16 w-600 max-w-md border-b last:border-b-0'>
            <img
                className={`p-2 bg-stark-white w-16 object-contain`}
                src={recipe.image}
            />
            <div className='flex flex-col font-sans w-autoflex-1 ml-4 self-start truncate'>
                <span
                    className={`text-lg`}
                >
                    {recipe.title}
                </span>
                <span>
                    Missing ingredients: {recipe.missedIngredients.length}
                </span>
            </div>
        </div>
    );
}
