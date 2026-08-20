// Import Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Import Pages
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"

// Import Contexts
import { CartProvider } from "./contexts/CartContext"

// Import Styles
import "./app.css"


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
