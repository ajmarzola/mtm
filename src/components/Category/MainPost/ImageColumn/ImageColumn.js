import './ImageColumn.css';

export const ImageColumn = ({ Url, Descricao }) => {
    const divStyle = { backgroundImage: `url(${Url})` };

    return (
        <div className='image-column' style={divStyle}>
            <p></p>
        </div>
    );
}