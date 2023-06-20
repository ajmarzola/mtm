import './MainPost.css';
import PostColumn from './PostColumn';
import ImageColumn from './ImageColumn';
import parse from 'html-react-parser';

export const MainPost = (props) => {
    const dataIso = props.Post.date;
    const data = new Date(dataIso);
    const dia = data.getDate();
    const mes = data.getMonth() + 1; // Os meses são indexados a partir de zero, então adicionamos 1
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    const dataFormatada = `${dia}/${mes}/${ano} ${hora}:${minutos}`;
    const resumo = parse(props.Post.excerpt.rendered);

    if (props.Align == "left") {
        return (
            <div className='main-post'>
                <ImageColumn Url="./images/Logo-Quadrado-Branco.png" Descricao={props.Post.title.rendered} />
                <PostColumn Titulo={props.Post.title.rendered} Resumo={resumo} Data={dataFormatada} />
            </div>
        );
    } else {
        return (
            <div className='main-post'>
                <PostColumn Titulo={props.Post.title.rendered} Resumo={resumo} Data={dataFormatada} />
                <ImageColumn Url="./images/Logo-Quadrado-Azul.png" Descricao={props.Post.title.rendered} />
            </div>
        );
    }
}