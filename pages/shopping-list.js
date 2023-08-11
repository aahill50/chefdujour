import clsx from 'clsx';
import ShoppingList from '../components/ShoppingList';

export default function ShoppingListPage() {
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
            <h2>Shopping List</h2>
            <ShoppingList />
        </div>
    );
}
