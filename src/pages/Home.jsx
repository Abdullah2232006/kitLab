import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Features from "../components/Features"
import BestProducts from "../components/BestProducts"

function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <Features />
            <BestProducts />
            <Footer />
        </>
    )
}

export default Home