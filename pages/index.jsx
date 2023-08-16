import clsx from 'clsx';
import Login from '../components/Login';

export default function HomePage() {

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
            <div>Welcome to Chef Du Jour</div>
            <Login />
        </div>
    );
}
