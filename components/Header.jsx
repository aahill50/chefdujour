import Head from 'next/head';
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <Head>
                <title>Chef du Jour</title>
            </Head>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/pantry'>Pantry</Link>
                </li>
                <li>
                    <Link href='/cookbook'>Cookbook</Link>
                </li>
                <li>
                    <Link href='/shoppingList'>Shopping List</Link>
                </li>
            </ul>
        </>
    );
}
