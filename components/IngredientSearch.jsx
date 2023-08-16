export default function IngredientSearch({ onChange, placeholder }) {
    return (
        <div className='mb-6'>
            <input
                className='rounded-lg w-full'
                type='text'
                name='ingredient'
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}
