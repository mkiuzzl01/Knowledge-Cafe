import PropTypes from 'prop-types';
import Bookmark from './Bookmark/Bookmark';

const Bookmarks = ({bookmarks,reading}) => {
    return (
        <div className='bg-slate-400 md:w-1/3 ms-3 p-5 rounded-md'>
            <div className='bg-slate-200 p-5 rounded-md text-center'>
                <h1 className='text-2xl font-bold text-purple-800'>Spent time on read : {reading}</h1>
            </div>
            <div>
            <h1 className='text-2xl font-bold text-white my-4'>Bookmarked Blogs: {bookmarks.length}</h1>
            <div>
                {
                    bookmarks.map(bookmarks=> <Bookmark key={bookmarks.id}  bookmarks= {bookmarks} ></Bookmark>)
                }
            </div>
        </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks:PropTypes.array,
    reading:PropTypes.number
};

export default Bookmarks;