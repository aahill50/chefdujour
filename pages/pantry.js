import clsx from 'clsx';
import IngredientList from '../components/IngredientList';
import IngredientSearch from '../components/IngredientSearch';
import ManageIngredient from '../components/ManageIngredient';
import SearchResults from '../components/SearchResults';
import { useStore } from '../store';
import debounce from 'lodash.debounce';

export default function PantryPage() {
    const pantry = useStore((state) => state.pantry);
    const setIngredientSearch = useStore((state) => state.setIngredientSearch);
    const searchForIngredient = useStore((state) => state.searchForIngredient);
    const addToPantry = useStore((state) => state.addToPantry);
    const removeFromPantry = useStore((state) => state.removeFromPantry);

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
                placeholder='Search for an ingredient to add to your pantry'
            />
            <SearchResults
                onClickIngredient={(ingredient) => addToPantry(ingredient)}
            />
            <IngredientList
                ingredients={pantry}
                renderChild={(ingredient) => (
                    <ManageIngredient
                        ingredient={ingredient}
                        onClick={(e) => removeFromPantry(ingredient)}
                    />
                )}
            />
        </div>
    );
}
