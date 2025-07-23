import React from "react";
import './Home.css';
import myPhoto from '../assets/me.jpg';
function home() {
    return (
        <div className="main">
            <div className="imag">
                <img src={myPhoto} alt="My Profile" className="profile-pic" />
            </div>
            <div className="info">
                <h2>Hey,  Shaziya Naz V</h2>
                <h3>Aspiring MERN Stack</h3>
                <p>
                    I'm an enthusiastic developer with a passion for building web applications.
                    I enjoy solving problems, learning new technologies, and creating clean UI/UX.
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
                <a href="/SHAZIYA.pdf">
                <button> View Resume </button>
                </a>
            </div>
        </div>
    );
}
export default home;