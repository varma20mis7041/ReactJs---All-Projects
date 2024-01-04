# E-commerce Web App

## Login Functionality

- When invalid credentials are provided in the login form and the "Login" button is clicked, display the respective error message from the response.
- When the username and password are provided correctly, and the "Login" button is clicked, the page should navigate to the Home Route.
- Unauthenticated users attempting to access the Home Route, Products Route, or Cart Route should be redirected to the Login Route.
- Authenticated users accessing the Home Route, Products Route, or Cart Route should be navigated to the respective route.
- Authenticated users attempting to access the Login Route should be redirected to the Home Route.
- Clicking the "Logout" button should navigate the user to the Login Route.
- Unauthenticated users attempting to access the Home Route, Products Route, or Cart Route should be navigated to the Login Route using the protected route.
- Authenticated users attempting to access the Home Route, Products Route, or Cart Route should be navigated to the respective route using the protected route.

## Products Route

### Fetching Products

- When an authenticated user opens the Products Route:
  - An HTTP GET request should be made to productsApiUrl with jwt_token in the Cookies and query parameters title_search, category, and rating with initial values as empty strings.
  - A loader should be displayed while fetching the data.
  - After the data is fetched successfully, display the products list received in the response.
  - If the HTTP GET request is unsuccessful, display the Failure view.
- When a non-empty value is provided in the Search Input and the Enter button is clicked:
  - Make an HTTP GET request to the productsApiUrl with jwt_token in the Cookies and query parameter title_search with a value as the text provided in the Search Input.
  - A loader should be displayed while fetching the data.
  - After the data is fetched successfully, display the products list received in the response.
- When a Category is clicked:
  - Make an HTTP GET request to the URL productsApiUrl with jwt_token in the Cookies and query parameter category with a value as the id of the category clicked.
  - A loader should be displayed while fetching the data.
  - After the data is fetched successfully, display the products list received in the response.
- When a Rating is clicked:
  - Make an HTTP GET request to the URL productsApiUrl with jwt_token in the Cookies and query parameter rating with a value as the id of the rating clicked.
  - A loader should be displayed while fetching the data.
  - After the data is fetched successfully, display the products list received in the response.
- When the Clear Filters button is clicked:
  - All the filters applied should be reset to initial values.
  - Make an HTTP GET request to the URL productsApiUrl with jwt_token in the Cookies and without any filters.
  - A loader should be displayed while fetching the data.
  - After the data is fetched successfully, display the products list received in the response.
- When multiple filters are applied, the HTTP GET request should be made with all the applied filters.

### Categories and Ratings

- The `AllProductsSection` component will consist of `categoryOptions`.
  - It consists of a list of category option objects with the following properties in each category option object:
    - **categoryId:** String
    - **name:** String
- The `AllProductsSection` component will consist of `ratingOptions`.
  - It consists of a list of rating option objects with the following properties in each rating option object:
    - **ratingId:** String
    - **imageUrl:** String

## Product Item Details Route

- Unauthenticated users attempting to access the Product Item Details Route should be navigated to the Login Route.
- When an authenticated user clicks on a product in the Products Route, the page should be navigated to the Product Item Details route.
- When an authenticated user opens the Product Item Details Route:
  - An HTTP GET request should be made to productDetailsApiUrl with jwt_token in the Cookies and product id as a path parameter.
  - A loader should be displayed while fetching the data.
  - After the data is fetched successfully, display the product details and similar products received in the response.
  - Initially, the quantity of the product should be 1.
  - The quantity of the product should be incremented by one when the plus icon is clicked.
  - The quantity of the product should be decremented by one when the minus icon is clicked.
  - If the HTTP GET request is unsuccessful, display the Failure view.
  - When the Continue Shopping button in the Failure view is clicked, the page should be navigated to the Products Route.

## Cart Route

- Unauthenticated users attempting to access the Cart Route should be navigated to the Login Route.

### Cart Features

#### Feature 1

- When an authenticated user tries to add the same product multiple times:
  - The quantity of the product should be updated accordingly, and the count of the cart items in the header should remain the same.

#### Feature 2

- The total amount and the number of items in the cart should be displayed in the Cart Route.

#### Feature 3

- In each cart item in the cart:
  - When the plus icon is clicked, the quantity of the product should be incremented by one.
  - When the minus icon is clicked, the quantity of the product should be decremented by one.
  - When the quantity of the product is one and the minus icon is clicked, the respective product should be removed from the cart.
  - Based on the quantity of the product, the product price, and the Cart Summary (total cost) should be updated accordingly.

#### Feature 4

- When an authenticated user clicks on the remove button, the cart item should be removed from the cart list.

#### Feature 5

- When an authenticated user clicks on the Remove All button, all the cart items should be removed from the cart, and the Empty Cart View should be displayed.

### CartContext

- The `CartContext` has an object as a value with the following properties:
  - **cartList:** This key stores the cart items.
  - **removeAllCartItems:** This method is used to remove all the cart items in the `cartList`.
  - **addCartItem:** This method adds the cart item to the `cartList`.
  - **removeCartItem:** This method removes the cart item from the `cartList`.
  - **incrementCartItemQuantity:** This method increases the quantity of a product in the `cartList`.
  - **decrementCartItemQuantity:** This method decreases the quantity of a product in the `cartList`.


