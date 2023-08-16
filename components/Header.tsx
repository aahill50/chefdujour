import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import clsx from 'clsx';
import { useStore } from '../store';

export default function Header() {
    const setActiveTab = useStore((state) => state.setActiveTab);
    const activeTab = useStore((state) => state.activeTab);
    const { pathname } = useRouter();
    const linkClasses = (path) =>
        clsx(
            { 'bg-celadon': isActiveTab(path) },
            { 'bg-stark-white': !isActiveTab(path) },
            'font-bold',
            'font-serif',
            'text-2xl',
            'italic',
            'text-teal',
            'border-teal',
            { 'border-l-2': path === '/' },
            'border-r-2',
            'border-t-2',
            { 'border-b-2': isActiveTab(path) },
            { 'border-b-celadon': isActiveTab(path) },
            'rounded-t',
            'px-4',
            'py-1',
            'relative',
            'z-10'
            // 'top-1'
        );

    useEffect(() => {
        setActiveTab(pathname);
    }, [pathname]);

    const isActiveTab = (path) => path === activeTab;

    return (
        <div className=''>
            <Head>
                <title>Chef du Jour</title>
            </Head>
            <ul className={clsx('flex flow-row')}>
                <li>
                    <Link className={linkClasses('/')} href='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link className={linkClasses('/pantry')} href='/pantry'>
                        Pantry
                    </Link>
                </li>
                <li>
                    <Link className={linkClasses('/cookbook')} href='/cookbook'>
                        Cookbook
                    </Link>
                </li>
                <li>
                    <Link
                        className={linkClasses('/shopping-list')}
                        href='/shopping-list'
                    >
                        Shopping List
                    </Link>
                </li>
            </ul>
        </div>
    );
}
