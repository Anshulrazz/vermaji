import React from 'react';
import './css/about.css'
const About = () => {
    return (
        <>
            <section id="about">
                <div class="ab">
                    <dotlottie-player src="https://lottie.host/64edbf7d-5d4d-4be0-a8f6-8cc7178d2fe8/0e0FAlYugJ.json"
                        background="transparent" speed="1" loop autoplay>
                    </dotlottie-player>
                </div>
                <div class="abtxt">
                    <p>Hello! & Welcome to</p>
                    <p>My Online world where my,</p>
                    <p id="color">"information (CV) is placed."</p>
                    <p><button onclick="downloadFile()">View CV</button></p>
                </div>
            </section>
            <section id="about">
                <div class="intro">
                    <strong>
                        <p id="col">Personal Background</p>
                    </strong>
                    <p>Hi there! My name is Anshul Kumar and I'm a BCA student right now. I'm an enthusiastic web and Android
                        developer, not just a student. I enjoy turning lines of code into slick, user-friendly experiences in
                        the wide world of digital. Come along with me on my journey through the world of online and mobile
                        development as we explore the possibilities of coding. Together, we can translate ideas into code and
                        realize our digital ambitions.</p>
                </div>
                <div class="ab">
                    <dotlottie-player src="https://lottie.host/37afc153-b07d-4a6d-bf44-10835eb9e66c/F83CXVMDLL.json"
                        background="transparent" speed="1" loop autoplay>
                    </dotlottie-player>
                </div>
            </section>
            <strong>
                <p className="coler">Educational Background</p>
            </strong>
            <section id="about">
                <div class="abc">
                    <dotlottie-player src="https://lottie.host/6e795e47-9db8-4fef-830e-fa6d97d9c634/PcrzZvZ7uK.json"
                        background="transparent" speed="1" loop autoplay>
                    </dotlottie-player>
                </div>
                <div class="edu">
                    <strong>
                        <p id="col">Educational Background</p>
                    </strong>
                    <p><p id="color">High School (82.4%) ={">"}</p> From Shree Shankar Singh Inter Collage Sidhpura Kasganj.</p>
                    <p><p id="color">Intermediate (82.4%) ={">"}</p> From Shree Shankar Singh Inter Collage Sidhpura Kasganj</p>
                    <p><p id="color">Bachelor Of Computer Applications(BCA) ={">"}</p> From GLA University Mathura.</p>
                </div>
            </section>
        </>
    );
}

export default About;
