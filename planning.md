# Tasks
-[ d ] Revise React
-[ d ] Design the UI
-[ d ] Build the home page
-[ ] Build the products page
-[ ] Build the cart page
-[ ] Build the sign in / up
-[ ] Add Bonus 1
-[ ] Add Bonus 2

# Home Page - done
- Navigation Bar - done
    Links:
        • Home
        • Products
        • Contact Us
        • Login
    Dynamic Login:
        • If the user is logged in → display the username and Logout button• If the user is not logged in → display Login button
- Hero Section - done
    • Attractive section with an “Order Now” button
        Functionality:
            • If the user is not logged in → show alert →redirect to loginpage• If the user is logged in → redirect to Products page
- Features Section - done
    • Show the shop advantages
    • Use hover effects and CSS transitions on each feature
- Best Products Section - done
    • Highlight the most popular or featured products
    • Include hover effects, animations, and smooth transitions
- Footer: - done
    • Social media icons
    • Contact information
    • Elements should have simple hover/animation effect

# Products Page
- Display all products with - done
    • Image
    • Product name/title
    • Category
    • Price
- Filter Functionality:
    • Selecting a product name or category shows only matching products
- Product Card Buttons:
    • Add to Cart(Button one):
        If the user is not logged in → show alert → redirect to login page.
        If logged in → add product to cart, update total price.
    • View Details (Button two) - done
        Opens a popup/modal showing:
        • Product image
        • Description
        • Category
        • Price
        • Buttons: Close and Add to Cart
- Cart Section:
    • Show all added products, quantity, and individual price
    • Display total price dynamically
    • Each product has a Remove button
    • Confirm Order Button:
        Opens a popup/modal showing:
        • Selected products
        • Product images
        • Total price
        • Message: “Order Confirmed"


## Cart Section Refined Logic

1. State Structure:
   - `cart` (Array of objects: `{ ...product, quantity }`)
   - `orders` (Array of confirmed order objects)

2. Add to Cart:
   - Check if user is logged in:
     - No  -> Alert & redirect to /login
     - Yes -> Proceed:
       - Check if item is already in `cart`:
         - Exists     -> `item.quantity + 1` (if below `stock`)
         - New item   -> add `{ ...product, quantity: 1 }`

3. Cart Page / Drawer:
   - Map over `cart` to display title, image, unit price, quantity, and subtotal (`price * quantity`).
   - Increase / Decrease quantity (+ / -). If quantity reaches 0, remove item.
   - Remove item: `cart.filter(item => item.id !== targetId)`
   - Dynamic Total: `cart.reduce((sum, item) => sum + item.price * item.quantity, 0)`

4. Confirm Order:
   - Open confirmation modal with items, total price, and success message.
   - Append current cart + timestamp + total to `orders`.
   - Empty the active cart (`setCart([])`).
