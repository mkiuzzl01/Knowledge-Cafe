import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blogs,addBookmarks,readingTime}) => {
    const {cover,author,author_img,posted_date,reading_time,title,hashtags} = blogs;
    return (
        <div className='space-y-5 mb-5'>
            <img className='w-full' src={cover} alt="Cover picture is coming" />
            <div className='md:flex justify-between items-center'>
                <div className='flex space-x-4'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                    <h2 className='text-2xl font-bold'>{author}</h2>
                    <p>{posted_date}</p>
                    </div>
                    </div>
                <div className='flex items-center space-x-2'>
                    <p> {reading_time} min read</p>
                    <button
                    onClick={()=>addBookmarks(blogs)}
                    className='text-3xl'
                    ><CiBookmark /></button>
                </div>
            </div>
            <div>
                <h1 className='text-4xl font-bold'>{title}</h1>
                {
                    hashtags.map((hash,idx)=><span key={idx} ><a href="">#{hash}</a></span>)
                }
                <div>
                <button onClick={()=> readingTime(reading_time)} className='text-red-500 underline'>Mark as read</button>
                </div>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blogs:PropTypes.object.isRequired,
    addBookmarks:PropTypes.func.isRequired,
    readingTime:PropTypes.func.isRequired
}
export default Blog;