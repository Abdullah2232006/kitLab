# Tasks
-[ d ] Design the UI
-[ d ] Build home page
-[ d ] Build products page
-[ d ] Build cart page
-[ ] Build sign in / up
-[ ] Implement Authentication functionality in all required places in the web app

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



# Products Page - done

## Tasks

- Display all products with - done
    • Image
    • Product name/title
    • Category
    • Price
- Filter Functionality - done
    • Selecting a product name or category shows only matching products
- Product Card Buttons - done
    • Add to Cart - done
        If the user is not logged in → show alert → redirect to login page.
        If logged in → add product to cart, update total price.
    • View Details - done
        Opens a popup/modal showing:
        • Product image
        • Description
        • Category
        • Price
        • Buttons: Close and Add to Cart


# Cart Page - done

## Cart Section Logic:

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

## Cart Section Refined Logic:
1. Create a Cart Context:
    - It will called in App.jsx
    - It is responsible for cart functionality:
        - Cart array state
        - Orders array state
        - add to cart function
        - remove from cart function
        - increase quantity function
    - decrease quantity function
4. Create Cart page
5. Cart page components:
    • Cart items list
    • Total price functionality
    • Confirm order button
6. Confirm order modal:
    • Display selected products
    • Display total price
    • Display success message
7. Add product to cart:
    • Check if user is logged in
    • If not logged in → alert & redirect to login page
    • If logged in → add product to cart, update total price


## Cart Section Implementation Plan:

- [ d ] Create a Cart Context (Logic): 
    - [ d ] It will be called in App.jsx
    - [ d ] It is responsible for cart functionality:
        - [ d ] Cart array state
        - [ d ] Orders array state
        - [ d ] Add to cart function
        - [ d ] Remove from cart function
        - [ d ] Increase quantity function
        - [ d ] Decrease quantity function
        - [ d ] Add local storage to all functions
- [ d ] Create Cart page:
    - [ d ] Add Cart page routing
    - [ d ] Add Nav Bar Link / icon to nav bar
    - [ d ] Display selected products
        - [ d ] debug Cart.jsx
        - [ d ] debug ConfirmOrderModule
        - [ d ] debug  cart context functions implementation in card, product module
    - [ d ] Display total price
    - [ d ] Confirm Order Button:
        - [ d ] Opens a popup/modal showing:
            - [ d ] Selected products
            - [ d ] Product images
            - [ d ] Total price
            - [ d ] Message: “Order Confirmed"

