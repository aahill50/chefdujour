import clsx from 'clsx';
import IngredientList from '../components/IngredientList';
import IngredientSearch from '../components/IngredientSearch';
import ManageIngredient from '../components/ManageIngredient';
import SearchResults from '../components/SearchResults';
import { useStore } from '../store';
import debounce from 'lodash.debounce';

export default function ShoppingListPage() {
    const shoppingList = useStore((state) => state.shoppingList);
    const setIngredientSearch = useStore((state) => state.setIngredientSearch);
    const searchForIngredient = useStore((state) => state.searchForIngredient);
    const addToShoppingList = useStore((state) => state.addToShoppingList);
    const removeFromShoppingList = useStore(
        (state) => state.removeFromShoppingList
    );

    return (
        <div
            className={clsx(
                'bg-celadon',
                'min-h-full',
                'p-6',
                'border-2',
                'border-teal',
                'relative',
                'rounded-lg',
                'rounded-tl-none'
            )}
        >
            <IngredientSearch
                onChange={debounce((e) => {
                    setIngredientSearch(e.target.value);
                    searchForIngredient();
                }, 500)}
                placeholder='Search for an ingredient to add to your shopping list'
            />
            <SearchResults
                onClickIngredient={(ingredient) =>
                    addToShoppingList(ingredient)
                }
            />
            <IngredientList
                ingredients={shoppingList}
                renderChild={(ingredient) => (
                    <ManageIngredient
                        ingredient={ingredient}
                        onClick={(e) => removeFromShoppingList(ingredient)}
                    />
                )}
            />
        </div>
    );
}
