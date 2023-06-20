import styles from './Title.module.css';

const Title = ({ children }) => {
    return (
        <div className={styles.texto}>
            {children}
        </div>
    );
}

export default Title;