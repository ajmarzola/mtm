import './ImageColumn.css';

export const ImageColumn = (props) => {
    return (
        <div className='image-column'>
            <img src={props.Url} alt={props.Descricao} />
        </div>
    );
}