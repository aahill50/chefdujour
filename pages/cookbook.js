import { useStore } from '../store';
import RecipeSearch from '../components/RecipeSearch';

export default function Cookbook() {
    const recipeSearchResults = useStore((state) => state.recipeSearchResults);

    return (
        <>
            <RecipeSearch />
            {Object.keys(recipeSearchResults).length ? <hr /> : null}
            {JSON.stringify(recipeSearchResults)}
        </>
    );
}
