
const Blog = ({blogs}) => {
    const {author} = blogs;
    console.log(author);
    return (
        <div>
            <h1>Name:{author}</h1>
        </div>
    );
};


export default Blog;