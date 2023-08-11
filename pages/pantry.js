import clsx from 'clsx';
import IngredientSearch from '../components/IngredientSearch';
import PantryIngredients from '../components/PantryIngredients';
import SearchResults from '../components/SearchResults';

export default function PantryPage() {
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
            <h1>Pantry</h1>
            <IngredientSearch />
            <SearchResults />
            <PantryIngredients />
        </div>
    );
}
