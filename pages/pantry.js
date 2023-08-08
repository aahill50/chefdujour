import { useStore } from '../store';
import IngredientSearch from '../components/IngredientSearch';
import PantryIngredients from '../components/PantryIngredients';
import SearchResults from '../components/SearchResults';

export default function PantryPage() {
    const ingredientSearchResults = useStore(
        (state) => state.ingredientSearchResults
    );

    return (
        <>
            <h1>Pantry</h1>
            <IngredientSearch />
            <SearchResults results={ingredientSearchResults} />
            <PantryIngredients />
        </>
    );
}
