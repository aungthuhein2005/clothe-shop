# Clothes Shop - E-Commerce React Application

A modern, fully responsive e-commerce web application for clothing shopping built with React. This application features a clean UI, smooth navigation, shopping cart functionality, and category-based product browsing.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![React Router](https://img.shields.io/badge/React_Router-6.17.0-red)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Features

### Core Features
- **Product Browsing**: Browse products by categories (Men's, Women's, Kids)
- **Product Details**: Detailed product pages with image gallery, size selection, and quantity controls
- **Shopping Cart**: Add/remove items with quantity management
- **User Authentication**: Login and signup pages
- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Category Filtering**: Filter products by category (Men, Women, Kids)
- **Related Products**: View related products on product detail pages
- **Newsletter Subscription**: Email subscription for exclusive offers

### UI/UX Features
- Modern card-based product design
- Interactive hover effects
- Smooth transitions and animations
- Mobile-friendly hamburger menu
- Discount badges on products
- Breadcrumb navigation
- Product reviews and descriptions

## 🛠️ Tech Stack

- **React** 18.2.0 - UI library
- **React Router DOM** 6.17.0 - Client-side routing
- **React Context API** - State management for cart and products
- **CSS3** - Styling with responsive design
- **Create React App** - Build tooling

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd clothe-shop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
clothe-shop/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── Components/
│   │   ├── Assets/          # Images and product data
│   │   ├── Breadcrums/      # Breadcrumb navigation
│   │   ├── CartItems/       # Shopping cart components
│   │   ├── DescriptionBox/  # Product description tabs
│   │   ├── Footer/          # Footer component
│   │   ├── Heros/           # Hero banner section
│   │   ├── Item/            # Product card component
│   │   ├── Navbar/          # Navigation bar
│   │   ├── NewCollection/   # New collection section
│   │   ├── NewsLetter/      # Newsletter subscription
│   │   ├── Offers/          # Special offers section
│   │   ├── Popular/         # Popular products section
│   │   ├── ProductDisplay/  # Product detail display
│   │   └── RelatedProducts/ # Related products section
│   ├── Context/
│   │   └── ShopContext.jsx  # Global state management
│   ├── pages/
│   │   ├── Cart.jsx         # Shopping cart page
│   │   ├── LoginSingup.jsx  # Authentication page
│   │   ├── Product.jsx      # Product detail page
│   │   ├── Shop.jsx         # Home/Shop page
│   │   └── ShopCategory.jsx # Category page
│   ├── App.js               # Main app component
│   └── index.js             # Entry point
└── package.json
```

## 🎯 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).  
The page will reload automatically when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.  
The build is optimized and minified for best performance.

### `npm run eject`
**Note: This is a one-way operation!**  
Ejects from Create React App to expose all configuration files. Use with caution.

## 🎨 Key Features Breakdown

### Navigation
- Responsive navbar with mobile hamburger menu
- Category-based navigation (Shop, Mens, Womens, Kids)
- Shopping cart icon with item count badge
- Login button (desktop) / Login link (mobile menu)

### Product Pages
- **Home Page**: Hero banner, popular products, new collections, offers, newsletter
- **Category Pages**: Filtered product listings by category
- **Product Detail Page**: 
  - Image gallery with thumbnail selection
  - Size selection (S, M, L, XL, XXL)
  - Quantity selector
  - Add to cart functionality
  - Product description and reviews tabs
  - Related products section

### Shopping Cart
- View all cart items
- Quantity display
- Remove items functionality
- Price calculations (subtotal, shipping, total)
- Promo code input
- Responsive card layout on mobile

### Responsive Design
- **Desktop**: Full-width layout with horizontal navigation
- **Tablet**: Adjusted spacing and grid layouts
- **Mobile**: 
  - Hamburger menu navigation
  - Stacked layouts
  - Card-based product display
  - Full-width buttons and inputs

## 🔧 State Management

The application uses React Context API for global state management:

- **ShopContext**: Manages cart items, product data, and cart operations
  - `cartItems`: Object storing item quantities
  - `addToCart(itemId)`: Add item to cart
  - `removeFromCart(itemId)`: Remove item from cart
  - `getTotalCartAmount()`: Calculate total cart value
  - `getTotalCartItems()`: Get total number of items in cart

## 📱 Responsive Breakpoints

- **Desktop**: > 1280px
- **Large Tablet**: 1024px - 1280px
- **Tablet**: 800px - 1024px
- **Mobile**: 500px - 800px
- **Small Mobile**: < 500px

## 🎯 Routes

- `/` - Home/Shop page
- `/mens` - Men's clothing category
- `/womens` - Women's clothing category
- `/kids` - Kids clothing category
- `/product/:productId` - Product detail page
- `/cart` - Shopping cart page
- `/login` - Login/Signup page

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy to Popular Platforms
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your repository for automatic deployments
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload the `build` folder to an S3 bucket

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Development

### Adding New Products
Products are stored in `src/Components/Assets/all_product.js`. Add new products following the existing structure:

```javascript
{
  id: number,
  name: string,
  category: string,
  image: string,
  new_price: number,
  old_price: number
}
```

### Styling Guidelines
- Use CSS modules or component-specific CSS files
- Follow mobile-first responsive design principles
- Maintain consistent spacing and color scheme
- Test on multiple screen sizes


**Built with ❤️ using React**
