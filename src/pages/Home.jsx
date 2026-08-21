import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Features from "../components/Features"
import BestProducts from "../components/BestProducts"
import ContactUs from "../components/ContactUs"

function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <Features />
            <BestProducts />
            <ContactUs />
            <Footer />
        </>
    )
}

export default Home