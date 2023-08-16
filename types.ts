export interface IngredientType {
    id: number;
    image: string;
    name: string;
}

export interface PantryType {
    [id: number]: IngredientType;
}

interface ShoppingListType {
    [id: number]: IngredientType;
}

interface RecipeType {
    id: number;
};

interface RecipeSearchResult {
    id: number;
    image: string;
    missedIngredientCount: number;
    title: string;
}

interface CookbookType {
    [id: number]: RecipeType
}

export interface StoreType {
    activeTab: string;
    cookbook: CookbookType;
    pantry: PantryType;
    ingredientSearch: string;
    ingredientSearchResults: IngredientType[];
    recipeInfo: RecipeType | null;
    recipeSearchResults: RecipeSearchResult[];
    shoppingList: ShoppingListType;
    addToPantry: (ingredient: IngredientType) => void;
    addToShoppingList: (ingredient: IngredientType) => void;
    getRecipeInfo: (recipeId: number) => void;
    removeFromPantry: (ingredient: IngredientType) => void;
    removeFromShoppingList: (ingredient: IngredientType) => void;
    searchForIngredient: () => void;
    searchForRecipe: () => void;
    setActiveTab: (activeTab: string) => void;
    setIngredientSearch: (searchString: string) => void;
    setIngredientSearchResults: (results: IngredientType[]) => void;
    setRecipeInfo: (results: RecipeType) => void;
    setRecipeSearchResults: (results: RecipeSearchResult[]) => void;
}
