import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/projectList.css';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://serverweb-eh64.onrender.com/api/projects');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="project-list">
            {projects.map((project) => (
                <div key={project._id} className="project-item">
                    <h2>{project.title}</h2>
                    <div className='blgs'>
                        <p className='over'>{project.overview}</p>
                        {project.imageUrl && <img className='image' src={project.imageUrl} alt={project.title} />}
                    </div>
                    {project.fileUrl && <a href={project.fileUrl}>Download</a>}
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
