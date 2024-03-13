import PropTypes from 'prop-types';

const Bookmark = ({bookmarks}) => {
    console.log(bookmarks)
    const {title} = bookmarks;
    return (
        <div className='bg-slate-300 my-2 p-4 rounded-lg'>
            <h1 className='text-lg font-semibold'>{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmarks:PropTypes.object.isRequired
};

export default Bookmark;