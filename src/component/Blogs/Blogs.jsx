import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import Blog from "./Blog/Blog";

const Blogs = ({addBookmarks,readingTime}) => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(response=> response.json())
        .then(data=> setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            {
            blogs.map(blogs=>
            <Blog
                key={blogs.id}
                blogs={blogs}
                addBookmarks={addBookmarks}
                readingTime={readingTime}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    addBookmarks:PropTypes.func.isRequired,
    readingTime:PropTypes.func.isRequired
}
export default Blogs;