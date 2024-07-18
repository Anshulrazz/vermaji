import React from 'react';
import './css/skill.css'

const Skills = () => {
    return (
        <>
            <section className="about">
                <div className="abtxt">
                    <p>"Master the Art of Code: </p>
                    <p> Transforming classNameeas into </p>
                    <p>Digital Realities!",</p>
                    <p className="col">"Empowering Connections: </p>
                    <p> Elevate Your Potential with</p>
                    <p className="col"> Soft Skills!"</p>
                </div>
                <div className="ab">
                    <dotlottie-player
                        src="https://lottie.host/64edbf7d-5d4d-4be0-a8f6-8cc7178d2fe8/0e0FAlYugJ.json"
                        background="transparent"
                        speed={1}
                        loop=""
                        autoPlay=""
                    ></dotlottie-player>
                </div>
            </section>
            <section className="skills">
                <div className="skills-container">
                    <p className="skl">Technicals Skills :)</p>
                    <div className="skills-row">
                        <div className="Web-Development">
                            <i className="fas fa-code" />
                            <h3>Web Development</h3>
                            <p>HTML, CSS, JavaScript, React, Node.js</p>
                            <div className="skill-meter">
                                <span>HTML</span>
                                <progress value={75} max={100} />
                                <span>CSS</span>
                                <progress value={65} max={100} />
                                <span>JavaScript</span>
                                <progress value={60} max={100} />
                                <span>React</span>
                                <progress value={45} max={100} />
                                <span>Node.js</span>
                                <progress value={40} max={100} />
                            </div>
                        </div>
                        <div className="Backend-Development">
                            <i className="fas fa-server" />
                            <h3>Backend Development</h3>
                            <p>Node.js, Express.js, PHP</p>
                            <div className="skill-meter">
                                <span>Node.js</span>
                                <progress value={40} max={100} />
                                <span>Express.js</span>
                                <progress value={25} max={100} />
                                <span>PHP</span>
                                <progress value={45} max={100} />
                            </div>
                        </div>
                        <div className="Database-Management">
                            <i className="fas fa-database" />
                            <h3>Database Management</h3>
                            <p>MySQL, MongoDB</p>
                            <div className="skill-meter">
                                <span>MySQL</span>
                                <progress value={35} max={100} />
                                <span>MongoDB</span>
                                <progress value={15} max={100} />
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="skills-row">
                        <div className="Backend-Development">
                            <i className="fas fa-lock" />
                            <h3>Cyber Security</h3>
                            <p>Ethical Hacking, Penetration Testing</p>
                            <div className="skill-meter">
                                <span>Ethical Hacking</span>
                                <progress value={40} max={100} />
                                <span>Penetration Testing</span>
                                <progress value={55} max={100} />
                            </div>
                        </div>
                        <div className="Web-Development">
                            <i className="fas fa-code" />
                            <h3>Programming Languages</h3>
                            <p>Java, Python, C</p>
                            <div className="skill-meter">
                                <span>Java</span>
                                <progress value={28} max={100} />
                                <span>Python</span>
                                <progress value={60} max={100} />
                                <span>C</span>
                                <progress value={32} max={100} />
                            </div>
                        </div>
                        <div className="Database-Management">
                            <i className="fas fa-code" />
                            <h3>Learning Skills</h3>
                            <p>Neural Networks, Rust</p>
                            <div className="skill-meter">
                                <span>Neural Networks</span>
                                <progress value={19} max={100} />
                                <span>Rust</span>
                                <progress value={12} max={100} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default Skills;
