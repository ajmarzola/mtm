import './MiniList.css';
import MiniPost from '../MiniPost';

export const MiniList = ({ Posts }) => {
    return (
        <div className='mini-list'>
            {Posts.map(post => <MiniPost key={post.id} Post={post} Url="./images/eu.png" />)}
        </div>
    );
}