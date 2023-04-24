import React from 'react';
import './Footer.css';
import Githup from '../../assets/github.png';
import Instgram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import logo from '../../assets/logo.png';
const Footer = () => {
    return (
        <div className='footer-container'>
            <hr />
            <div className="footer">
                <div className="social-links">
                    <a href="https://github.com/ahmedelsayed1996" className="social-links"><img src={Githup} alt="" /></a>
                    <a href="https://github.com/ahmedelsayed1996" className="social-links"> <img src={Instgram} alt="" /></a>
                    <a href="https://www.linkedin.com/in/ahmed-saied-528348198/" className="social-links"><img src={LinkedIn} alt="" /></a>
                    
                </div>
                <div className="logo-f">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
    );
}

export default Footer;
