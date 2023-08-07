import { useState } from 'react';
import utils from '../utils';
import ManagePantryIngredient from '../components/ManagePantryIngredient';
import Ingredient from '../components/Ingredient';
import IngredientSearch from '../components/IngredientSearch';
import PantryIngredients from '../components/PantryIngredients';
import RecipeSearch from '../components/RecipeSearch';
import SearchResults from '../components/SearchResults';
import styles from './pantry.module.css';

// pantry to use for testing!
const defaultPantry = {
    1001: { id: 1001, name: 'butter', image: 'butter-sliced.jpg' },
    1077: { id: 1077, name: 'milk', image: 'milk.png' },
    1253: { id: 1253, name: 'american cheese', image: 'american-cheese.jpg' },
    6159: { id: 6159, name: 'tomato soup', image: 'tomato-soup.png' },
    11215: { id: 11215, name: 'garlic', image: 'garlic.png' },
    11529: { id: 11529, name: 'tomato', image: 'tomato.png' },
    18064: { id: 18064, name: 'bread', image: 'white-bread.jpg' },
    20581: {
        id: 20581,
        name: 'unbleached all purpose flour',
        image: 'flour.png',
    },
};

export default function Pantry() {
    const [ingredient, setIngredient] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [recipeSearchResults, setRecipeSearchResults] = useState([]);
    const [pantryIngredients, setPantryIngredients] = useState(defaultPantry);
    const _isInPantry = (ingredient) => !!pantryIngredients[ingredient.id];

    function handleIngredientChange(e) {
        setIngredient(e.target.value);
    }

    function handleRecipeTermChange(e) {
        setRecipeTerm(e.target.value);
    }

    function handleIngredientSearch(e) {
        e.preventDefault();

        fetch(
            `/api/search?queryType=ingredientSearch&ingredient=${ingredient}`,
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
                console.log(response.results);
                setSearchResults(response.results);
            })
            .catch((err) => console.log(err));
    }

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

    function handleAddToPantry(e, ingredientToAdd) {
        e.preventDefault();

        setPantryIngredients({
            ...pantryIngredients,
            [ingredientToAdd.id]: ingredientToAdd,
        });
    }

    function handleRemoveFromPantry(e, ingredient) {
        e.preventDefault();

        setPantryIngredients((s) => {
            const {
                [ingredient.id]: {},
                ...pantryIngredients
            } = s;
            return { ...pantryIngredients };
        });
    }

    return (
        <>
            <h1>Pantry</h1>
            <IngredientSearch
                ingredient={ingredient}
                handleIngredientChange={handleIngredientChange}
                handleIngredientSearch={handleIngredientSearch}
            />
            <RecipeSearch handleRecipeSearch={handleRecipeSearch} />
            <SearchResults
                _isInPantry={_isInPantry}
                handleAddToPantry={handleAddToPantry}
                handleRemoveFromPantry={handleRemoveFromPantry}
                pantryIngredients={pantryIngredients}
                results={searchResults}
            />
            <PantryIngredients
                _isInPantry={_isInPantry}
                handleAddToPantry={handleAddToPantry}
                handleRemoveFromPantry={handleRemoveFromPantry}
                pantryIngredients={pantryIngredients}
            />
            {Object.keys(recipeSearchResults).length ? <hr /> : null}
            {JSON.stringify(recipeSearchResults)}
        </>
    );
}
