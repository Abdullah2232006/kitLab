import { Link, useLocation } from "react-router-dom"
import { useCartContext } from "../contexts/CartContext"
import { useState, useEffect } from "react"

import styles from "./NavBar.module.css"

function NavBar() {
    const { totalItems } = useCartContext()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()
    
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)

    // Close menu when navigating to another page
    useEffect(() => {
        closeMenu()
    }, [location.pathname])

    // Prevent scrolling in the application when menu is open
    useEffect(() => {
        isMenuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
        return () => document.body.style.overflow = 'auto'
    }, [isMenuOpen])


    return (
        <>
        <nav className={styles.navbar}>
            
            {/* Logo */}
            <div className={styles.logo}>
                <Link to="/" onClick={closeMenu}>KitLab</Link>
            </div>

            {/* Desktop Links */}
            <div className={styles.links}>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <a href="/#contact">Contact Us</a>
            </div>

            {/* Actions: Cart + Desktop Login + Mobile Hamburger Button */}
            <div className={styles.actions}>
                
                {/* Desktop cart */}
                <Link to="/cart" className={styles.cartBtn} onClick={closeMenu} aria-label="Shopping Cart">
                    <svg className={styles.cartIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    {totalItems > 0 && (
                        <span className={styles.cartBadge}>{totalItems}</span>
                    )}
                </Link>

                {/* Desktop Log In */}
                <a href="#" className={styles.signInBtn}>Log In</a>

                {/* Hamburger Toggle Button (Mobile/Tablet only) */}
                <button
                    className={`${styles.hamburgerBtn} ${isMenuOpen ? styles.active : ""}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
            </div>

             {/* Mobile Dropdown Menu Drawer */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.menuOpen : ""}`}>
                <div className={styles.mobileLinks}>
                    <Link to="/" onClick={closeMenu}>Home</Link>
                    <Link to="/products" onClick={closeMenu}>Products</Link>
                    <a href="/#contact" onClick={closeMenu}>Contact Us</a>
                </div>
                <div className={styles.mobileActions}>
                    <a href="#" className={styles.mobileSignInBtn} onClick={closeMenu}>Log In</a>
                </div>
            </div>

            {/* Backdrop Overlay when menu is open */}
            {isMenuOpen && <div className={styles.backdrop} onClick={closeMenu}></div>}
        </nav>
        </>
    )
}

export default NavBar