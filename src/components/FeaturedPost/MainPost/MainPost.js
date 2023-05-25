import './MainPost.css';
import PostColumn from './PostColumn';
import ImageColumn from './ImageColumn';

export const MainPost = (props) => {
    if (props.Align == "left") {
        return (
            <div className='main-post'>
                <ImageColumn Url="./images/Logo-Quadrado-Branco.png" Descricao="Logo Quadrado Teste" />
                <PostColumn Titulo="How I created a chess subscription application."
                    Resumo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper accumsan nisl, a aliquam nibh. Phasellus felis justo, convallis eget eros at, consequat luctus felis. Nunc pharetra orci tellus. Nulla facilisi."
                    Data="12 July 2022" />
            </div>
        );
    } else {
        return (
            <div className='main-post'>
                <PostColumn Titulo="Typescript in 21 steps, best in-depth guide."
                    Resumo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper accumsan nisl, a aliquam nibh. Phasellus felis justo, convallis eget eros at, consequat luctus felis. Nunc pharetra orci tellus. Nulla facilisi."
                    Data="12 July 2022" />
                <ImageColumn Url="./images/Logo-Quadrado-Azul.png" Descricao="Logo Quadrado Teste" />
            </div>
        );
    }


}