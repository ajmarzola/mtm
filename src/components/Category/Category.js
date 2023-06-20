import './Category.css';
import MainPost from './MainPost';
import Title from '../Title';
import MiniList from './MiniList';
import posts from '../../json/mockup.json';

export const Category = ({ Id, Titulo }) => {
    const seqInt = parseInt(Id);
    const resto = seqInt % 2;
    const alinhamento = (seqInt == 0) || (resto == 1) ? "left" : "right"; 
    const miniPosts = posts.length > 4 ? posts.slice(1, 4) : posts;
    const header = Titulo === '' ? "ÚLTIMAS" : Titulo;

    return (
        <section className="category">
            <Title><h1>{header}</h1></Title>
            <MainPost Align={alinhamento} Post={posts[0]} />
            <MiniList Posts={miniPosts} />
        </section>
    );
}