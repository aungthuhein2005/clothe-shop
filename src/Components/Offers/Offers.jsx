import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';
import exlusive_image_boy from '../Assets/exclusive_image_boy.png'

function Offers() {
    return (
        <div className='offers'>
            <div className="offer-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offer-right">
                <img src={exlusive_image_boy} alt="" />
            </div>
        </div>
    )
}

export default Offers
