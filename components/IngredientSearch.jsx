export default function IngredientSearch({
    ingredient,
    handleIngredientChange,
    handleIngredientSearch,
}) {
    return (
        <>
            <input
                type='text'
                name='ingredient'
                value={ingredient}
                onChange={handleIngredientChange}
            />
            <button onClick={handleIngredientSearch}>
                Search for ingredient
            </button>
        </>
    );
}
