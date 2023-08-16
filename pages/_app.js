import { SessionProvider } from 'next-auth/react';
import Layout from '../components/Layout';
import Header from '../components/Header';

import '../styles/global.css';

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}) {
    return (
        <SessionProvider session={session}>
            <Layout>
                <Header />
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    );
}
