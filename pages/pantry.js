import { useState } from 'react';
import utils from '../utils';
import ManagePantryIngredient from '../components/ManagePantryIngredient';
import Ingredient from '../components/Ingredient';
import IngredientSearch from '../components/IngredientSearch';
import PantryIngredients from '../components/PantryIngredients';
import RecipeSearch from '../components/RecipeSearch';
import SearchResults from '../components/SearchResults';
import usePantryIngredients from '../hooks/usePantryIngredients';
import useShoppingList from '../hooks/useShoppingList';
import styles from './pantry.module.css';

export default function PantryPage() {
    const [ingredient, setIngredient] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [recipeSearchResults, setRecipeSearchResults] = useState([]);
    const { pantryIngredients, setPantryIngredients } = usePantryIngredients();
    const { shoppingList, setShoppingList } = useShoppingList();
    const _isInPantry = (ingredient) => !!pantryIngredients[ingredient.id];
    const _isInShoppingList = (ingredient) => !!shoppingList[ingredient.id];

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

    function handleAddToShoppingList(e, ingredientToAdd) {
        e.preventDefault();

        setShoppingList({
            ...shoppingList,
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

    function handleRemoveFromShoppingList(e, ingredient) {
        e.preventDefault();

        setShoppingList((s) => {
            const {
                [ingredient.id]: {},
                ...shoppingList
            } = s;
            return { ...shoppingList };
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
                _isInShoppingList={_isInShoppingList}
                handleAddToShoppingList={handleAddToShoppingList}
                handleRemoveFromShoppingList={handleRemoveFromShoppingList}
            />
        </>
    );
}
