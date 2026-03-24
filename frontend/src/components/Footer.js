import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import './footer.css';

function Footer() {
    return (
        <footer className='footer-section'>

            <div className='footer-container'>

                <div className='footer-left'>
                    <h2 className="footer-logo">GAGAN</h2>
                    <p className="footer-tagline">
                        AI/ML Engineer & Data Scientist building intelligent systems.
                    </p>
                </div>

                <div className='footer-links'>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className='footer-social'>
                    <h3>Connect</h3>
                    <div className="social-icons">
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaGithub /></a>
                        <a href="#"><SiLeetcode /></a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 Gagan. All Rights Reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;
