import clsx from 'clsx';
import { useStore } from '../store';
import Recipe from './Recipe';

export default function RecipeSearch() {
    const searchForRecipe = useStore((state) => state.searchForRecipe);
    const recipeSearchResults = useStore((state) => state.recipeSearchResults);

    return (
        <div className=''>
            <button
                className={clsx(
                    'bg-teal',
                    'p-6',
                    'my-6',
                    'rounded-lg',
                    'text-center',
                    'text-white'
                )}
                onClick={searchForRecipe}
            >
                Find recipes based on your ingredients!
            </button>
            {recipeSearchResults.length
                ? recipeSearchResults.map((result) => (
                      <Recipe recipe={result} />
                  ))
                : null}
            {/* {JSON.stringify(recipeSearchResults)} */}
        </div>
    );
}
