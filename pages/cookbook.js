import { useStore } from '../store';
import RecipeSearch from '../components/RecipeSearch';
import clsx from 'clsx';
import Recipe from '../components/Recipe';

export default function Cookbook() {
    const cookbook = useStore((state) => state.cookbook);

    return (
        <div
            className={clsx(
                'bg-celadon',
                'min-h-full',
                'w-full',
                'p-6',
                'border-2',
                'border-teal',
                'relative',
                'rounded-lg',
                'rounded-tl-none'
            )}
        >
            <RecipeSearch />
            {Object.values(cookbook).map((recipe) => (
                <Recipe recipe={recipe} />
            ))}
        </div>
    );
}
