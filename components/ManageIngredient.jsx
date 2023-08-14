import Image from 'next/image';
import xMark from '../public/icons/icon_x.png';

export default function ManageIngredient({ ingredient, onClick }) {
    return (
        <div className='bg-stark-white flex rounded-full p-1 mx-2'>
            <Image
                className='h-4 w-4 self-end align-self-end'
                src={xMark}
                onClick={e => onClick(ingredient)}
            />
        </div>
    );
}
