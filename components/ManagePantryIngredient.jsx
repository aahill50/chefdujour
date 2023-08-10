import Image from 'next/image';
import { useStore } from '../store';
import pantryIcon from '../public/icons/icon_pantry.png';
import checkmarkIcon from '../public/icons/icon_checkmark.png';
import xIcon from '../public/icons/icon_x.png';
import { subscribeToChanges } from '../utils';

export default function ManagePantryIngredient({ ingredient }) {
    const pantry = useStore((state) => state.pantry);
    const addToPantry = useStore((state) => state.addToPantry);
    const removeFromPantry = useStore((state) => state.removeFromPantry);

    const unsub = subscribeToChanges(['pantry, shoppingList']);
    unsub();

    const handler = (e) =>
        !!pantry[ingredient.id]
            ? removeFromPantry(ingredient)
            : addToPantry(ingredient);

    const icon = (
        <Image
            className={'h-8 w-auto absolute top-2 right-2'}
            src={pantryIcon}
            width={40}
            height={40}
            alt={
                !!pantry[ingredient.id] ? 'Remove from Pantry' : 'Add to Pantry'
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
                !!pantry[ingredient.id] ? 'Remove from Pantry' : 'Add to Pantry'
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
                !!pantry[ingredient.id] ? 'Remove from Pantry' : 'Add to Pantry'
            }
        />
    );

    const iconWithIndicator = (
        <>
            {icon}
            {!!pantry[ingredient.id] ? checkMark : xMark}
        </>
    );

    return (
        <div className='h-10 relative'>
            <button onClick={handler}>{iconWithIndicator}</button>
        </div>
    );
}
