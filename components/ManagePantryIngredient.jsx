import { useStore } from '../store';
import { subscribeToChanges } from '../utils';

export default function ManagePantryIngredient({ ingredient }) {
    const pantry = useStore((state) => state.pantry);
    const addToPantry = useStore((state) => state.addToPantry);
    const removeFromPantry = useStore((state) => state.removeFromPantry);

    const unsub = subscribeToChanges(['shoppingList']);
    unsub();

    const handler = (e) =>
        !!pantry[ingredient.id]
            ? removeFromPantry(ingredient)
            : addToPantry(ingredient);

    const labelCopy = !pantry[ingredient.id] ? 'Add to Pantry' : 'In Pantry';

    return (
        <div className='h-6 relative'>
            <input
                type='checkbox'
                htmlFor={`manage-pantry-${ingredient.id}`}
                onClick={handler}
                className='rounded'
                checked={!!pantry[ingredient.id] ? 'checked' : false}
            />
            <label
                id={`manage-pantry-${ingredient.id}`}
                className='text-sm ml-1'
            >
                {labelCopy}
            </label>
        </div>
    );
}
