import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src="./images/Logo-Linha-Azul-removebg.png" alt="Marzola Tecnologia e Multimídia" />
        </header>
    );
}

export default Header;