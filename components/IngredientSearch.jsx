import { useStore } from '../store';
import debounce from 'lodash.debounce';

export default function IngredientSearch() {
    const ingredientSearch = useStore((state) => state.ingredientSearch);
    const setIngredientSearch = useStore((state) => state.setIngredientSearch);
    const searchForIngredient = useStore((state) => state.searchForIngredient);
    const handler = debounce((e) => {
        setIngredientSearch(e.target.value);
        searchForIngredient();
    }, 500);

    return (
        <div className='mb-6'>
            <input
                className='rounded-lg w-full'
                type='text'
                name='ingredient'
                onChange={handler}
                placeholder='Search for an ingredient'
            />
        </div>
    );
}
