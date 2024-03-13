import PropTypes from 'prop-types';

const Blog = ({blogs}) => {
    console.log(blogs)
    const {cover,author,author_img,posted_date,reading_time,title,hashtags} = blogs;
    console.log(author);
    return (
        <div>
            <img src={cover} alt="" />
            <div className='md:flex justify-between items-center'>
                <div className='flex space-x-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                    <h2 className='text-2xl font-bold'>{author}</h2>
                    <p>{posted_date}</p>
                    </div>
                    </div>
                <div className='flex space-x-2'>
                    <p> {reading_time} min read</p>
                    <button></button>
                </div>
            </div>
        </div>
    );
};

Blog.prototype = {
    blogs:PropTypes.object.isRequired
}
export default Blog;