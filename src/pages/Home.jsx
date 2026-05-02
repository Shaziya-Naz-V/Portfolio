import React from "react";
import './Home.css';
import myPhoto from "../assets/shaz3.jpeg";
function home() {
    return (
        <div className="main">
            <div className="imag">
                <img src={myPhoto} alt="My Profile" className="profile-pic" />
            </div>
            <div className="info">
                <h2>Hey,  Shaziya Naz V</h2>
                <h3>Full Stack Developer (MERN)</h3>
                <p>
                   MERN Stack developer with experience building full-stack applications using React, Node.js and MongoDB. Skilled in creating responsive UI and REST APIs. Completed a MERN Stack internship and certified in MERN Stack by GeeksforGeeks and python Certificate. Passionate about solving real-world problems through code.
                </p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/shaziya-naz-v-b14b2829b" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="https://github.com/Shaziya-Naz-V" target="_blank" rel="noreferrer">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a href="mailto:shaziyait05.com">
                        <i className="fas fa-envelope fa-2x"></i>
                    </a>
                </div>
                <a href="/SHAZIYA_FSD.pdf" download className="btn-primary">
                 Download Resume 
                </a>
            </div>
        </div>
    );
}
export default home;