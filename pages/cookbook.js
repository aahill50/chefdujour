import { useStore } from '../store';
import RecipeSearch from '../components/RecipeSearch';
import clsx from 'clsx';


export default function Cookbook() {
    const recipeSearchResults = useStore((state) => state.recipeSearchResults);

    return (
        <div className={clsx(
            'bg-celadon',
            'min-h-full',
            'p-6',
            'border-2',
            'border-teal',
            'relative',
            'rounded-lg',
            'rounded-tl-none'
        )}>
            <RecipeSearch />
            {Object.keys(recipeSearchResults).length ? <hr /> : null}
            {JSON.stringify(recipeSearchResults)}
        </div>
    );
}
