import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const blogs = useLoaderData();
    
    return (
        <div>
           {
            blogs.map(blog => <Blog blog = {blog}></Blog>)
           } 
        </div>
    );
};

export default Blogs;