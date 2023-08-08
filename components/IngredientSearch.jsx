import { useStore } from "../store";

export default function IngredientSearch() {
    const ingredientSearch = useStore(state => state.ingredientSearch);
    const setIngredientSearch = useStore(state => state.setIngredientSearch);
    const searchForIngredient = useStore(state => state.searchForIngredient);

    return (
        <>
            <input
                type='text'
                name='ingredient'
                value={ingredientSearch}
                onChange={e => setIngredientSearch(e.target.value)}
            />
            <button onClick={searchForIngredient}>
                Search for ingredient
            </button>
        </>
    );
}
