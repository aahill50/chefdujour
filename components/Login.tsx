import clsx from 'clsx';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Login() {
    const { data: session } = useSession();
    const buttonClasses = clsx(
        'my-6',
        'p-2',
        'bg-salmon/50',
        'border',
        'border-teal',
        'rounded-lg',
        'shadow-xl',
        'active:shadow-md',
        'active:bg-salmon'
    );

    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button className={buttonClasses} onClick={() => signOut()}>
                    Sign out
                </button>
            </>
        );
    }
    return (
        <>
            Not signed in <br />
            <button className={buttonClasses} onClick={() => signIn()}>
                Sign in
            </button>
        </>
    );
}
