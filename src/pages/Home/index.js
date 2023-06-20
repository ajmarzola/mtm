import styles from './Home.module.css';
import Category from '../../components/Category';

const Home = () => {
    return(
        <>
        <div className={styles.home}>
            <Category Id="0" Titulo="" />
            <Category Id="1" Titulo="TESTE 2" />
            <Category Id="2" Titulo="TESTE 3" />
            <Category Id="3" Titulo="TESTE 4" />
            <Category Id="4" Titulo="TESTE 5" />
        </div>
        </>
    );
}

export default Home;