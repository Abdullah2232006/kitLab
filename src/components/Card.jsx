import styles from './Card.module.css'
import ProductModal from './ProductModal'
import { useState } from 'react'
import { useCartContext } from '../contexts/CartContext'

function Card({ product }) {
    const { addProduct } = useCartContext()
    const imageSrc = product.thumbnail
    const price = product.price
    const titleLimit = 20
    const decriptionLimit = 90

    const [isViewDetailsClicked, setIsViewDetailsClicked] = useState(false)

    function openModal () {
        setIsViewDetailsClicked(true)
    }

    return (
        <div className={styles.card}>
            {/* Image section */}
            <div className={styles.imageContainer}>
                <img src={imageSrc} alt={product.title} className={styles.image} />

                <div className={styles.badgesContainer}>
                    <span className={`${styles.badge} ${styles.category}`}>{product.category}</span>      

                    <span className={`${styles.badge} ${product.stock > 0 ? styles.inStock : styles.outOfStock}`}>
                        {product.stock > 0 ? `${product.stock} in stock` : 'Out of Stock'}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className={styles.content}>
                <h3 className={styles.title}>
                    {
                        product.title.length > titleLimit
                            ? (
                                <>
                                    {product.title.slice(0, titleLimit)}...
                                    {/* <button className={styles.viewDetailsBtn} onClick={openModal}>View Details</button> */}
                                </>
                            )
                            : (
                                product.title
                            )
                    }
                </h3>

                <p className={styles.description}>
                    {
                        product.description.length > decriptionLimit
                            ? `${product.description.slice(0, decriptionLimit)}...`
                            : product.description
                    }
                </p>

                <button className={styles.detailsBtn} onClick={openModal}>View Details</button>


                {/* Footer */}
                <div className={styles.footer}>
                    <div className={styles.priceContainer}>
                        <span>Price</span>
                        <span className={styles.price}>{price}</span>
                    </div>

                    <button 
                        className={styles.cartBtn}
                        onClick={() => addProduct(product)}
                        disabled={product.stock <= 0}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>

            {
                isViewDetailsClicked && (
                    <ProductModal 
                        product={product} 
                        onClose={() => setIsViewDetailsClicked(false)} 
                    />
                )
            }

        </div>
    )
}

export default Card