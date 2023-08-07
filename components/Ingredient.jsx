import utils from '../utils';

export default function Ingredient({ classname, ingredient }) {
    return (
        <div>
            <img
                className={classname}
                src={utils.ingredientImage(ingredient.image)}
            />
            {ingredient.name}
        </div>
    );
}
