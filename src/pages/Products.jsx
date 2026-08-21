// Import Pages
import Card from "../components/Card"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Search from "../components/Search"

// Import Data
import data from "../data/db.json"

// Import Styling
import styles from "./Products.module.css"

// Import Dependencies
import { useState } from "react"

function Products() {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredProducts = data.products.filter((product) => {
        const query = searchQuery.toLowerCase().trim()

        if (!query) return true

        return (
            product.title?.toLowerCase().includes(query) ||
            product.category?.toLowerCase().includes(query) ||
            product.description?.toLowerCase().includes(query)
        )
    })

    // const products = data.products
    return (
        <>
            <NavBar />

            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>All Products</h1>
                    <p>Browse our complete collection of hardware kits, dev boards, and components.</p>
                    <Search setSearchQuery={setSearchQuery} />
                </div>

                {filteredProducts.length === 0 ? (
                    <p style={{ color: "var(--main-font-color)", padding: "2rem 0" }}>
                        No products found matching &ldquo;{searchQuery}&rdquo;.
                    </p>
                ) : (
                    <div className={styles.cards}>
                        {filteredProducts.map((product) => (
                            <Card product={product} key={product.id} />
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </>
    )
}

export default Products