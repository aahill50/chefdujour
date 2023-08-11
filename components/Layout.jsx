import styles from './layout.module.css';

export default function Layout({ children }) {
    return <div className={`bg-salmon px-12 py-6 h-screen`}>{children}</div>;
}
