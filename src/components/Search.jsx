import { useState } from "react"
import styles from "./Search.module.css"

export default function Search({ setSearchQuery }) {
    const [searchTerm, setSearchTerm] = useState("")

    function handleSearchChange(e) {
        const value = e.target.value
        setSearchTerm(value)
        setSearchQuery(value)
    }

    function handleClear() {
        setSearchTerm("")
        setSearchQuery("")
    }

    return (
        <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()} role="search">
            <div className={styles.searchWrapper}>
                <svg
                    className={styles.searchIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>

                <input
                    type="text"
                    value={searchTerm}
                    placeholder="Search hardware kits, dev boards, components..."
                    onChange={handleSearchChange}
                    className={styles.searchInput}
                    aria-label="Search products"
                />

                {searchTerm && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className={styles.clearBtn}
                        aria-label="Clear search"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                )}
            </div>
        </form>
    )
}