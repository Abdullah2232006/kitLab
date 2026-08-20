import { Link } from 'react-router-dom';
import Card from './Card';
import data from '../data/db.json';
import styles from './BestProducts.module.css';

function BestProducts() {
    const featuredProducts = data.products.filter((product) => product.isBestProduct)

    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Best Selling Products</h2>
                <p>Explore our most popular hardware kits, microcontroller boards, and component packs.</p>
            </div>

            <div className={styles.cardsGrid}>
                {featuredProducts.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>

            <div className={styles.actionContainer}>
                <Link to="/products" className={styles.viewAllBtn}>
                    View All Products &rarr;
                </Link>
            </div>
        </section>
    );
}

export default BestProducts;
