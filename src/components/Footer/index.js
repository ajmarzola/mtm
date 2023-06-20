import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Anderson Marzola - Analista de Sistemas</p>
            <hr />
            <span>@marzolateam</span>
        </footer>
    );
}

export default Footer;