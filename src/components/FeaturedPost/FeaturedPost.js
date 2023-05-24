import './FeaturedPost.css';
import MainPost from './MainPost';

export const FeaturedPost = (props) => {
    return (
        <div className='featured-post'>
            <MainPost />
        </div>
    );
}