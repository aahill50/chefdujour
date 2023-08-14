import { useState } from 'react';
import { useStore } from '../store';
import clsx from 'clsx';
import RecipeDetail from './RecipeDetail';

export default function Recipe({ recipe }) {
    const getRecipeInfo = useStore((state) => state.getRecipeInfo);
    const recipeInfo = useStore((state) => state.recipeInfo);
    const [expanded, setExpanded] = useState(false);

    return (
        <div
            className={clsx(
                'text-left',
                'mx-6x',
                'w-full',
                'border-b',
                'last:border-b-0 bg-salmon'
            )}
        >
            <div
                className={clsx('flex', 'flex-row')}
                onClick={(e) => {
                    if (!expanded) {
                        setExpanded(true);
                        if (recipeInfo.id !== recipe.id)
                            getRecipeInfo(recipe.id);
                    } else {
                        setExpanded(false);
                    }
                }}
            >
                <img
                    className={`p-2 bg-stark-white w-16 object-contain`}
                    src={recipe.image}
                />
                <div className='flex flex-col font-sans w-autoflex-1 ml-4 self-start truncate'>
                    <span className={`text-lg`}>{recipe.title}</span>
                    <div>
                        Missing ingredients:
                        <span className='flex flex-wrap mb-2'>
                            {recipe.missedIngredients.map((ingredient) => (
                                <span className='bg-stark-white rounded-full border-teal border px-2 m-0.5'>
                                    {ingredient.name}
                                </span>
                            ))}
                        </span>
                    </div>
                </div>
            </div>
            {expanded ? (
                <RecipeDetail recipeId={recipe.id} recipeInfo={recipeInfo} />
            ) : null}
        </div>
    );
}
