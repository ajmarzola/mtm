import './MiniPost.css';
import Title from '../../Title';
import Excerpt from '../../Excerpt';
import parse from 'html-react-parser';

export const MiniPost = ({ Post, Url }) => {
    const dataIso = Post.date;
    const data = new Date(dataIso);
    const dia = data.getDate();
    const mes = data.getMonth() + 1; // Os meses são indexados a partir de zero, então adicionamos 1
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minutos}`;
    const divStyle = { backgroundImage: `url(${Url})` };
    const resumo = parse(Post.excerpt.rendered);
    
    return (
        <div className='mini-post'>
            <div style={divStyle}>
                <p></p>
            </div>
            <Title><h3>{Post.title.rendered}</h3></Title>
            <Excerpt>{resumo}</Excerpt>
            <span>{dataFormatada}</span>
        </div>
    );
}