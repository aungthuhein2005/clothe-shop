import React, { useContext, useState } from 'react'
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

function ProductDisplay(props) {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState('M');
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(product.image);
    
    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
    
    const handleAddToCart = () => {
        for(let i = 0; i < quantity; i++) {
            addToCart(product.id);
        }
        // Show success message (you can add a toast notification here)
        alert(`Added ${quantity} item(s) to cart!`);
    };
    
    const handleQuantityChange = (change) => {
        setQuantity(prev => {
            const newQuantity = prev + change;
            return newQuantity < 1 ? 1 : newQuantity > 10 ? 10 : newQuantity;
        });
    };
    
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img 
                        src={product.image} 
                        alt="" 
                        className={selectedImage === product.image ? 'active' : ''}
                        onClick={() => setSelectedImage(product.image)}
                    />
                    <img 
                        src={product.image} 
                        alt="" 
                        className={selectedImage === product.image ? 'active' : ''}
                        onClick={() => setSelectedImage(product.image)}
                    />
                    <img 
                        src={product.image} 
                        alt="" 
                        className={selectedImage === product.image ? 'active' : ''}
                        onClick={() => setSelectedImage(product.image)}
                    />
                    <img 
                        src={product.image} 
                        alt="" 
                        className={selectedImage === product.image ? 'active' : ''}
                        onClick={() => setSelectedImage(product.image)}
                    />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={selectedImage} alt={product.name} />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    {product.old_price && (
                        <div className="productdisplay-right-price-old">${product.old_price}</div>
                    )}
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, consequuntur! Fuga unde, obcaecati dolor cumque sapiente veritatis fugiat quis, sunt consequatur nemo corporis nulla animi quam molestias eius? Debitis, laborum?
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        {sizes.map((size) => (
                            <div 
                                key={size}
                                className={selectedSize === size ? 'selected' : ''}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="productdisplay-right-quantity">
                    <h1>Quantity</h1>
                    <div className="quantity-controls">
                        <button onClick={() => handleQuantityChange(-1)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => handleQuantityChange(1)}>+</button>
                    </div>
                </div>
                <button onClick={handleAddToCart} className="add-to-cart-btn">ADD TO CART</button>
                <div className="productdisplay-right-category">
                    <span>Category : <span>{product.category || 'Women, T-Shirt, Crop Top'}</span></span>
                </div>
                <div className="productdisplay-right-category">
                    <span>Tags : <span>Modern, Latest</span></span>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay
