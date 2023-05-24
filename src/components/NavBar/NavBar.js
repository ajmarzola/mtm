import Menu from '../Menu';
import './NavBar.css';

export const NavBar = () => {
    return (
        <div className='navbar'>
            <Menu url="#about" target='_self' texto='ABOUT' />
            <Menu url="#design" target='_self' texto='DESIGN' />
            <Menu url="#programming" target='_self' texto='PROGRAMMING' />
            <Menu url="#blockchain" target='_self' texto='BLOCKCHAIN' />
            <Menu url="#courses" target='_self' texto='COURSES' />
            <hr />
        </div>
    );
}