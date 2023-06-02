import './MiniPost.css';

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

    return (
        <div className='mini-post'>
            <div style={divStyle}>
                <p></p>
            </div>
            <h2>{Post.title.rendered}</h2>
            <span>{dataFormatada}</span>
        </div>
    );
}