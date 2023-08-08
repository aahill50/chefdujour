import ShoppingList from '../components/ShoppingList';
import { useStore } from '../store';

export default function ShoppingListPage() {
    return (
        <>
            <h2>Shopping List</h2>
            <ShoppingList />
        </>
    );
}
