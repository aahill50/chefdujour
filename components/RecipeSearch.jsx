import { useStore } from '../store';
import Recipe from './Recipe';

export default function RecipeSearch() {
    const searchForRecipe = useStore((state) => state.searchForRecipe);
    const recipeSearchResults = useStore((state) => state.recipeSearchResults);

    return (
        <>
            <button onClick={searchForRecipe}>
                Search for recipes based on your ingredients!
            </button>
            {recipeSearchResults.length
                ? recipeSearchResults.map((result) => (
                      <Recipe recipe={result} />
                  ))
                : null}
        </>
    );
}
