import './PostColumn.css';

export const PostColumn = ({ Titulo, Resumo, Data }) => {
    return (
        <div className="post-column">
            <h1>{Titulo}</h1>
            <p dangerouslySetInnerHTML={{ __html: Resumo }} />
            <span>{Data}</span>
        </div>
    );
}