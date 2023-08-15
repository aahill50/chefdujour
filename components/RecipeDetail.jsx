export default function RecipeDetail({ recipeId, recipeInfo }) {
    const jsonDetail = <pre>{JSON.stringify(recipeInfo, null, 2)}</pre>;
    const {
        cookingMinutes,
        preparationMinutes,
        servings,
        extendedIngredients,
        sourceUrl,
        cuisines,
        analyzedInstructions,
    } = recipeInfo;

    const showRecipeInfo = recipeInfo.id === recipeId;

    return showRecipeInfo ? (
        <div className='h-full border-2 p-2'>
            <pre>
                <div>Prep time: {preparationMinutes} minutes</div>
                <div>Cook time: {cookingMinutes} minutes</div>
                <div>Servings: {servings}</div>
                <div>
                    Source:{' '}
                    <a href={sourceUrl} target='_blank'>
                        {sourceUrl}
                    </a>
                </div>
                <div>Cuisines: {cuisines?.join(',')}</div>
                <div>Ingredients</div>
                <ul>
                    {extendedIngredients?.map((ing) => (
                        <li>- {ing.original}</li>
                    ))}
                </ul>
                <div>Recipe</div>
                <ul>
                    {analyzedInstructions?.map((instruction) =>
                        instruction.steps.map((step) => (
                            <div className='whitespace-normal mb-2'>
                                * {step.step}
                            </div>
                        ))
                    )}
                </ul>
                {jsonDetail}
            </pre>
        </div>
    ) : null;
}
