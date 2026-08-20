import facebookIcon from '../assets/icons/facebook.png'
import xIcon from '../assets/icons/x.png'
import instagramIcon from '../assets/icons/instagram.png'
import linkedinIcon from '../assets/icons/linkedin.png'

import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.brand}>
                <div className={styles.logo}>
                    KitLab
                </div>
                <p>
                    High-quality electronics kits & dev boards for makers and engineers.
                </p>
            </div>

            <div className={styles.links}>
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>

            <div className={styles.social}>
                <h4>Social Media</h4>
                <ul className={styles.socialList}>
                    <li>
                        <a href="#" aria-label="Facebook">
                            <img src={facebookIcon} alt="Facebook" className={styles.icon} />
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label="X">
                            <img src={xIcon} alt="X" className={styles.icon} />
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label="Instagram">
                            <img src={instagramIcon} alt="Instagram" className={styles.icon} />
                        </a>
                    </li>
                    <li>
                        <a href="#" aria-label="LinkedIn">
                            <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;