import Card from "../components/Card"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

import data from "../data/db.json"
import styles from "./Products.module.css"

function Products() {
    let products = data.products
    return (
        <>
            <NavBar />

            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>All Products</h1>
                    <p>Browse our complete collection of hardware kits, dev boards, and components.</p>
                </div>
                <div className={styles.cards}>
                    {products.map((product) => (
                        <Card product={product} key={product.id} />
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Products