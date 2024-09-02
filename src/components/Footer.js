import React, { useState } from 'react';
import './css/footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = async () => {
        if (!email) {
            alert('Please enter a valid email');
            return;
        }

        try {
            const response = await fetch('https://serverweb-eh64.onrender.com/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            // eslint-disable-next-line
            const data = await response.json();
            
            if (response.ok) {
                alert('Subscription successful');
            } else {
                alert('Subscription failed');
            }
        } catch (error) {
            console.error('Error subscribing:', error);
            alert('Subscription failed');
        }
    };
    return (
        <>
            <footer>
                <div className='cont-footer'>
                    <div className='links'>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            <li><Link to='/skills'>Skills</Link></li>
                            <li><Link to='/projects'>Projects</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='abt'>
                        <p>Anshul Kumar's Portfolio: Showcasing projects, skills, and contact information of a dedicated computer science student specializing in cyber security and software development.</p>
                        <div className='subscribe'>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                aria-label="Subscribe to our newsletter"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <button className="email" onClick={handleSubscribe}>Subscribe</button>
                        </div>
                    </div>
                    <div className='social'>
                        <h3>Follow Us</h3>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FiYoutube />
                        </a>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <p>&copy; 2024 Anshul Kumar. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
