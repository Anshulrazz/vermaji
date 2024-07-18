import React from 'react';
import WriteBlog from '../components/WriteBlog';
import UploadProject from './UploadProject';

const BlogAdmin = () => {
    return (
        <>
            <div className='flx'>
                <WriteBlog />
                <UploadProject />
            </div>

        </>
    );
}

export default BlogAdmin;
