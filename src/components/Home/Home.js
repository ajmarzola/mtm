import './Home.css';
import Header from '../Header';
import NavBar from '../NavBar';
import FeaturedPost from '../FeaturedPost';

export const Home = () => {
    return (
        <div className='home'>
            <Header />
            <NavBar />
            <FeaturedPost Titulo="LATEST" />
        </div>
    );
}