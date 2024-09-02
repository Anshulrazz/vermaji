import React from 'react';
import './css/blogs.css'
import BlogList from './BlogList';
const Blogs = () => {
    return (
        <>
            <section className="blogsec">
                <div class="abtxt">
                    <p>"Hii! Guys Welcome</p>
                    <p>to my blogs section,</p>
                    <p className="colblogs">here you can explore my blogs,</p>
                    <p>And you can also share your's.</p>
                </div>
                <div class="ab">
                    <dotlottie-player src="https://lottie.host/37afc153-b07d-4a6d-bf44-10835eb9e66c/F83CXVMDLL.json"
                        background="transparent" speed="1"  loop autoplay>
                    </dotlottie-player>
                </div>
            </section>
            <center><strong>Blogs :)</strong></center>
            <BlogList/>
        </>
    );
}

export default Blogs;
