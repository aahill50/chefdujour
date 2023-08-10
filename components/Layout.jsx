import styles from './layout.module.css';

export default function Layout({ children }) {
    return <div className={`bg-celadon px-12 py-6`}>{children}</div>;
}
