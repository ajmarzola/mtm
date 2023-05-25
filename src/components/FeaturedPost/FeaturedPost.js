import './FeaturedPost.css';
import MainPost from './MainPost';
import MainTitle from './MainTitle';

export const FeaturedPost = (props) => {
    return (
        <div className='featured-post'>
            <MainTitle Titulo={props.Titulo} />
            <MainPost Align="left" />
        </div>
    );
}