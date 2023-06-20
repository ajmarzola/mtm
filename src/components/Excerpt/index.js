import styles from './Excerpt.module.css';

const Excerpt = ({ children }) => {
    return (
        <div className={styles.texto}>
            {children}
        </div>
    );
}

export default Excerpt;