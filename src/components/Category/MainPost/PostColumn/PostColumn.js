import Title from '../../../Title';
import Excerpt from '../../../Excerpt';
import './PostColumn.css';

export const PostColumn = ({ Titulo, Resumo, Data }) => {
    return (
        <div className="post-column">
            <Title><h2>{Titulo}</h2></Title>
            <Excerpt>{Resumo}</Excerpt>
            <span>{Data}</span>
        </div>
    );
}