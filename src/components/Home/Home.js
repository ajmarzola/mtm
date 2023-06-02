import './Home.css';
import Header from '../Header';
import NavBar from '../NavBar';
import Category from '../Category';
import Footer from '../Footer';

export const Home = () => {
    return (
        <div className='home'>
            <Header />
            <NavBar />
            <Category Id="0" Titulo="" />
            <Category Id="1" Titulo="TESTE 2" />
            <Category Id="2" Titulo="TESTE 3" />
            <Category Id="3" Titulo="TESTE 4" />
            <Category Id="4" Titulo="TESTE 5" />
            <Footer />
        </div>
    );
}