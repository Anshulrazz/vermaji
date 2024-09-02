import React, { useState } from 'react';
import axios from 'axios';
import './css/uploadProject.css'
const WriteBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://serverweb-eh64.onrender.com/api/blogs', {
                title,
                content,
                imageUrl,
            });
            console.log(response.data);
            setTitle('');
            setContent('');
            setImageUrl('');
            alert('Upload sucessfully');
        } catch (error) {
            alert('Please try again ');
            console.error('Error creating blog:', error);
        }
        
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2>Write Blog...</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
                required
            />
            <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Image URL"
                required
            />
            <button type="submit">Create Blog</button>
        </form>
    );
};

export default WriteBlog;
