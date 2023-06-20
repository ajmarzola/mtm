import Menu from '../Menu';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <Menu url="./">HOME</Menu>
            <Menu url="./about">ABOUT</Menu>
            <Menu url="./design">DESIGN</Menu>
            <Menu url="./programming">PROGRAMMING</Menu>
            <Menu url="./blockchain">BLOCKCHAIN</Menu>
            <Menu url="./courses">COURSES</Menu>
            <hr />
        </div>
    );
}

export default NavBar;