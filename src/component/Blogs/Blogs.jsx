import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    console.log(blogs)

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
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;