import { Link } from "react-router-dom"

import styles from "./NavBar.module.css"

function NavBar() {
    return (
        <>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link to="/">KitLab</Link>
            </div>
            <div className={styles.links}>
                <Link to="/">Categories</Link>
                <Link to="/products">Products</Link>
                <Link to="/">Contact Us</Link>
            </div>
            <div>
                <a href="#" className={styles.signInBtn}>Log In</a>
                {/* #TODO: Add Log In Functionality */}
            </div>
        </nav>
        </>
    )
}

export default NavBar