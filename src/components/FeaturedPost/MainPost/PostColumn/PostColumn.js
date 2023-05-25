import './PostColumn.css';

export const PostColumn = (props) => {
    return (
        <div className="post-column">
            <h1>{props.Titulo}</h1>
            <p>{props.Resumo}</p>
            <span>{props.Data}</span>
        </div>
    );
}