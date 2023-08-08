import { useStore } from '../store';

export default function RecipeSearch() {
    const searchForRecipe = useStore((state) => state.searchForRecipe);
    const recipeSearchResults = useStore((state) => state.recipeSearchResults);

    return (
        <>
            <button onClick={searchForRecipe}>
                Search for recipes based on your ingredients!
            </button>
            <ul>
                {JSON.stringify(recipeSearchResults)}
            </ul>
        </>
    );
}
