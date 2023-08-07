import { useState } from 'react';
import RecipeSearch from '../components/RecipeSearch';
import usePantryIngredients from '../hooks/usePantryIngredients';

export default function Cookbook() {
    const [recipeSearchResults, setRecipeSearchResults] = useState([]);
    const { pantryIngredients } = usePantryIngredients();

    function handleRecipeSearch(e) {
        e.preventDefault();

        const ingredientsString = Object.values(pantryIngredients)
            .map((ingredient) => ingredient.name)
            .join(',');

        fetch(
            `/api/search?queryType=recipeSearchByIngredient&ingredients=${encodeURI(
                ingredientsString
            )}`,
            {
                headers: {
                    Accept: 'application/json',
                },
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response);
                setRecipeSearchResults(response);
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <RecipeSearch handleRecipeSearch={handleRecipeSearch} />
            {Object.keys(recipeSearchResults).length ? <hr /> : null}
            {JSON.stringify(recipeSearchResults)}
        </>
    );
}
