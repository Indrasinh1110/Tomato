import { assets } from "../../assets/assets";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-column">
                    <a href='#home'><img src={assets.logo} className="footer-logo" alt="Logo" /></a>
                    <div className="footer-menu">
                        <h2 className="footer-menu-name">Get Started</h2>
                        <ul id="menu-get-started" className="footer-menu-list">
                            <li className="menu-item">
                                Start
                            </li>
                            <li className="menu-item">
                                Documentation
                            </li>
                            <li className="menu-item">
                                Installation
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-content-column">
                    <div className="footer-menu">
                        <h2 className="footer-menu-name">Company</h2>
                        <ul id="menu-company" className="footer-menu-list">
                            <li className="menu-item">
                                Contact
                            </li>
                            <li className="menu-item">
                                News
                            </li>
                            <li className="menu-item">
                                Careers
                            </li>
                        </ul>
                    </div>
                    <div className="footer-menu">
                        <h2 className="footer-menu-name">Legal</h2>
                        <ul id="menu-legal" className="footer-menu-list">
                            <li className="menu-item">
                                Privacy Notice
                            </li>
                            <li className="menu-item">
                                Terms fo Use
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-content-column">
                    <div className="footer-menu">
                        <h2 className="footer-menu-name">Quick Links</h2>
                        <ul id="menu-quick-links" className="footer-menu-list">
                            <li className="menu-item">
                                Support Center
                            </li>
                            <li className="menu-item">
                                Service Status
                            </li>
                            <li className="menu-item">
                                Security
                            </li>
                            <li className="menu-item">
                                Blog
                            </li>
                            <li className="menu-item">
                                Customers
                            </li>
                            <li className="menu-item">
                                Reviews
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-content-column">
                    <div className="footer-call-to-action">
                        <h2 className="footer-call-to-action-title">Let's Chat</h2>
                        <p className="footer-call-to-action-description">Have a support question?</p>
                        <a className="footer-call-to-action-button button" href="#" target="_self">Get in Touch</a>
                    </div>
                    <div className="footer-call-to-action">
                        <h2 className="footer-call-to-action-title">You Call Us</h2>
                        <p className="footer-call-to-action-link-wrapper">
                            0124-64453
                        </p>
                        <div className="footer-social-links">
                            <img src={assets.facebook_icon} alt="facebook" />
                            <img src={assets.twitter_icon} alt='twitter' />
                            <img src={assets.linkedin_icon} alt='linkdin' />
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer-copyright">
                <div className="footer-copyright-wrapper">
                    <p className="footer-copyright-text">
                        <a className="footer-copyright-link" href="#" target="_self">©2024. | Designed By: Indrasinh Maheraman. | All rights reserved.</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
