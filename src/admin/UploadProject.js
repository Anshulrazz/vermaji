import React, { useState } from 'react';
import axios from 'axios';
import '../components/css/uploadProject.css'

const UploadProject = () => {
    const [title, setTitle] = useState('');
    const [overview, setOverview] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [fileUrl, setFileUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://serverweb-eh64.onrender.com/api/projects', {
                title,
                overview,
                imageUrl,
                fileUrl,
            });
            console.log(response.data);
            setTitle('');
            setOverview('');
            setImageUrl('');
            setFileUrl('');
            alert('Upload sucessfully');
        } catch (error) {
            alert('Please try again ');
            console.error('Error creating project:', error);
        }
    };

    return (
        <form className='form' onSubmit={handleSubmit}>
            <h2>Upload Project</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <input
                type="text"
                value={overview}
                onChange={(e) => setOverview(e.target.value)}
                placeholder="Overview"
                required
            />
            <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Image URL"
                required
            />
            <input
                type="url"
                value={fileUrl}
                onChange={(e) => setFileUrl(e.target.value)}
                placeholder="File URL"
                required
            />
            <button type="submit">Create Project</button>
        </form>
    );
};

export default UploadProject;
