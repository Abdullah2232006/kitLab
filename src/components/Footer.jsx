import { Link } from 'react-router-dom';
import facebookIcon from '../assets/icons/facebook.png';
import xIcon from '../assets/icons/x.png';
import instagramIcon from '../assets/icons/instagram.png';
import linkedinIcon from '../assets/icons/linkedin.png';

import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.brand}>
                    <div className={styles.logo}>
                        KitLab
                    </div>
                    <p className={styles.brandDescription}>
                        High-quality electronics kits &amp; dev boards for makers and engineers.
                    </p>
                </div>

                <div className={styles.links}>
                    <h4 className={styles.sectionHeading}>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><a href="/#contact">Contact Us</a></li>
                    </ul>
                </div>

                <div className={styles.social}>
                    <h4 className={styles.sectionHeading}>Social Media</h4>
                    <ul className={styles.socialList}>
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <img src={facebookIcon} alt="Facebook" className={styles.icon} />
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
                                <img src={xIcon} alt="X" className={styles.icon} />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <img src={instagramIcon} alt="Instagram" className={styles.icon} />
                            </a>
                        </li>
                        <li>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <p>&copy; {new Date().getFullYear()} KitLab. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;