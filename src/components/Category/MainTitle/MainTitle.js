import './MainTitle.css';

export const MainTitle = (props) => {
    return (
        <div className='main-title'>
            <h1>{props.Titulo}</h1>
        </div>
    );
}