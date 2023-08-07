export default function RecipeSearch({ handleRecipeSearch }) {
    return (
        <>
            <button onClick={handleRecipeSearch}>
                Search for recipes based on your ingredients!
            </button>
        </>
    );
}
