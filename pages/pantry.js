import { useState } from 'react';
import utils from '../utils';
import ManagePantryIngredient from '../components/ManagePantryIngredient';
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

function Ingredient({ classname, ingredient }) {
    return (
        <div>
            <img
                className={classname}
                src={utils.ingredientImage(ingredient.image)}
            />
            {ingredient.name}
        </div>
    );
}

function PantryIngredients({ pantryIngredients }) {
    return (
        <>
            <ul>
                {Object.entries(pantryIngredients).map(
                    ([ingredientId, ingredient]) => {
                        return (
                            <li key={ingredientId}>
                                <Ingredient
                                    classname={styles.ingredientImage}
                                    ingredient={ingredient}
                                />
                            </li>
                        );
                    }
                )}
            </ul>
            {JSON.stringify(pantryIngredients)}
        </>
    );
}

function SearchResults({
    handleAddToPantry,
    handleRemoveFromPantry,
    pantryIngredients,
    results = [],
}) {
    const _isInPantry = (ingredient) => !!pantryIngredients[ingredient.id];
    return (
        <ul>
            {results.map((result) => {
                return (
                    <li
                        className={styles.searchResult}
                        key={
                            _isInPantry(result)
                                ? `in-pantry-${result.id}`
                                : result.id
                        }
                    >
                        <Ingredient
                            classname={styles.ingredientImage}
                            ingredient={result}
                        />
                        <ManagePantryIngredient
                            handleAddToPantry={handleAddToPantry}
                            handleRemoveFromPantry={handleRemoveFromPantry}
                            ingredient={result}
                            isInPantry={_isInPantry(result)}
                        />
                    </li>
                );
            })}
        </ul>
    );
}

function IngredientSearch({
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

function RecipeSearch({ handleRecipeSearch }) {
    return (
        <>
            <button onClick={handleRecipeSearch}>
                Search for recipes based on your ingredients!
            </button>
        </>
    );
}

export default function Pantry() {
    const [ingredient, setIngredient] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [recipeSearchResults, setRecipeSearchResults] = useState([]);
    const [pantryIngredients, setPantryIngredients] = useState(defaultPantry);

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
                handleAddToPantry={handleAddToPantry}
                handleRemoveFromPantry={handleRemoveFromPantry}
                pantryIngredients={pantryIngredients}
                results={searchResults}
            />
            <PantryIngredients pantryIngredients={pantryIngredients} />
            {Object.keys(recipeSearchResults).length ? <hr /> : null}
            {JSON.stringify(recipeSearchResults)}
        </>
    );
}
