import Layout from '../components/Layout';
import Header from '../components/Header';

import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Header />
            <Component {...pageProps} />
        </Layout>
    );
}
