import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/bloglist.css';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('https://serverweb-eh64.onrender.com/api/blogs');
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div key={blog._id} className="blog-item">
                    <h2 className='color'>{blog.title}</h2>
                    <div className='blgs'>
                        <p className='conblg'>{blog.content}</p>
                        {blog.imageUrl && <img src={blog.imageUrl} alt={blog.title} />}
                        {console.log(blog.imageUrl)}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogList;
