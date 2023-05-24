import './Menu.css';

export const Menu = (props) => {
    return (
        <div className='menu'>
            <a href={props.url} target={props.target}>{props.texto}</a>
        </div>
    );
}