import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = ({ url, children }) => {
    return (
        <Link to={url} className={styles.menu}>{children}</Link>
    );
}

export default Menu;