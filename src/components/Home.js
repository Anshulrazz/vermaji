import React, { useState } from 'react';
import './css/home.css';

const Home = () => {
    const [isShow, setIsShow] = useState(false);

    const showPopup = () => {
        setIsShow(true);
    };

    const closePopup = () => {
        setIsShow(false);
    };

    return (
        <>
            <section className="home">
                <div className="hm">
                    <dotlottie-player src="https://lottie.host/3e17394e-6340-4567-b715-68d19e57a09d/wsKb7Xprks.json" speed="1" loop autoplay></dotlottie-player>
                </div>
                <div className="txt">
                    <p>Hii!</p>
                    <p>This is Anshul Kumar,</p>
                    <p id="color">"Coding is today's superpower. Use it to build tomorrow."</p>
                    <p><button onClick={showPopup}>Hire Me</button></p>
                </div>
            </section>
            <p className='itr'>Intro...</p>
            {isShow && (
                <div id="popup" className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closePopup}>&times;</span>
                        <form>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" />
                            <label htmlFor="phone">Phone</label>
                            <input type="text" id="phone" />
                            <label htmlFor="message">Message</label>
                            <input type="text" id="message" />
                            <p><button type="button" onClick={closePopup}>Submit</button></p>
                        </form>
                    </div>
                </div>
            )}
            <section className="home">
                <div className="txt">
                    <p>As a committed student of computer science who is passionate about</p>
                    <p id="color">Web Development | APIs | SEO | Security.</p>
                    <p>my area of expertise is creating effective and safe software and websites.</p>
                </div>
                <div className="hm">
                    <dotlottie-player src="https://lottie.host/db8ffd83-a679-491c-bdf3-e824561703a7/XGfPuhFAET.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
                </div>
            </section>
        </>
    );
}

export default Home;
