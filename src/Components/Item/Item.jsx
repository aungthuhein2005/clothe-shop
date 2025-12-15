import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';

function Item(props) {
    const discount = props.old_price ? Math.round(((props.old_price - props.new_price) / props.old_price) * 100) : 0;
    
    return (
        <div className="item">
            <div className="item-image-container">
                <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
                    <img 
                        src={props.image} 
                        alt={props.name}
                        className="item-image"
                    />
                </Link>
                {discount > 0 && (
                    <div className="item-discount-badge">
                        -{discount}%
                    </div>
                )}
            </div>
            <div className="item-info">
                <Link to={`/product/${props.id}`} className="item-name-link">
                    <p className="item-name">{props.name}</p>
                </Link>
                <div className="item-prices">
                    <div className="item-price-new">
                        ${props.new_price}
                    </div>
                    {props.old_price && (
                        <div className="item-price-old">
                            ${props.old_price}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Item
