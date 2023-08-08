import { ingredientImage } from '../utils';

export default function Ingredient({ classname, ingredient }) {
    return (
        <div>
            <img
                className={classname}
                src={ingredientImage(ingredient.image)}
            />
            {ingredient.name}
        </div>
    );
}
