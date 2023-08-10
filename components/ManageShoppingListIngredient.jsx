import Image from 'next/image';
import { useStore } from '../store';
import listIcon from '../public/icons/icon_list.png';
import checkmarkIcon from '../public/icons/icon_checkmark.png';
import xIcon from '../public/icons/icon_x.png';

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

    const icon = (
        <Image
            className={'h-8 w-auto absolute top-2 right-2'}
            src={listIcon}
            width={40}
            height={40}
            alt={
                !!shoppingList[ingredient.id]
                    ? 'Remove from Shopping List'
                    : 'Add to Shopping List'
            }
        />
    );

    const checkMark = (
        <Image
            className='w-3 h-3 absolute top-2 right-2'
            src={checkmarkIcon}
            width={20}
            height={20}
            alt={
                !!shoppingList[ingredient.id]
                    ? 'Remove from Shopping List'
                    : 'Add to Shopping List'
            }
        />
    );

    const xMark = (
        <Image
            className='w-3 h-3 absolute top-2 right-2'
            src={xIcon}
            width={20}
            height={20}
            alt={
                !!shoppingList[ingredient.id]
                    ? 'Remove from Shopping List'
                    : 'Add to Shopping List'
            }
        />
    );

    const iconWithIndicator = (
        <>
            {icon}
            {!!shoppingList[ingredient.id] ? checkMark : xMark}
        </>
    );

    return (
        <div className={'h-10 relative'}>
            <button onClick={handler}>{iconWithIndicator}</button>
        </div>
    );
}
