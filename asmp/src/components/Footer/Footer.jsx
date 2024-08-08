import React from 'react'
import './Footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <>
        <div className="asmp-footer">
            <p>Made with ❤️ by SARC</p>
            <div className="social-links">
                <ul>
                    <li>
                    <a href="https://www.facebook.com/SARC.IITB/" target="_blank" rel="noopener noreferrer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa-brands fa-facebook"></span>
                    </a>
                    </li>
                    <li>
                    <a href="https://www.youtube.com/c/SARCIITBombay" target="_blank" rel="noopener noreferrer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa-brands fa-youtube"></span>
                    </a>
                    </li>
                    <li>
                    <a href="https://www.instagram.com/sarc_iitb/?hl=en" target="_blank" rel="noopener noreferrer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa-brands fa-instagram"></span>
                    </a>
                    </li>
                    <li>
                    <a href="https://www.linkedin.com/in/sarciitb/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa-brands fa-linkedin"></span>
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Footer