import { useStore } from '../store';

export default function ManageShoppingListIngredient({ ingredient }) {
    const shoppingList = useStore((state) => state.shoppingList);
    const addToShoppingList = useStore((state) => state.addToShoppingList);
    const removeFromShoppingList = useStore(
        (state) => state.removeFromShoppingList
    );
    const handler = (e) => {
        e.preventDefault();
        !!shoppingList[ingredient.id]
            ? removeFromShoppingList(ingredient)
            : addToShoppingList(ingredient);
    };

    const labelCopy = !shoppingList[ingredient.id]
        ? 'Add to Shopping List'
        : 'On Shopping List';

    return (
        <div className={'h-6 relative'}>
            <input
                type='checkbox'
                htmlFor={`manage-shopping-list-${ingredient.id}`}
                onClick={handler}
                className='rounded'
                checked={!!shoppingList[ingredient.id] ? 'checked' : false}
            />
            <label
                id={`manage-shopping-list-${ingredient.id}`}
                className='text-sm ml-1'
            >
                {labelCopy}
            </label>
        </div>
    );
}
