import { Link } from "react-router-dom"
import { useCartContext } from "../contexts/CartContext"

import styles from "./NavBar.module.css"

function NavBar() {
    const { totalItems } = useCartContext()

    return (
        <>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">KitLab</Link>
            </div>
            <div className={styles.links}>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <a href="/#contact">Contact Us</a>
            </div>
            <div className={styles.actions}>
                <Link to="/cart" className={styles.cartBtn} aria-label="Shopping Cart">
                    <svg className={styles.cartIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    {totalItems > 0 && (
                        <span className={styles.cartBadge}>{totalItems}</span>
                    )}
                </Link>
                <a href="#" className={styles.signInBtn}>Log In</a>
                {/* #TODO: Add Log In Functionality */}
            </div>
        </nav>
        </>
    )
}

export default NavBar