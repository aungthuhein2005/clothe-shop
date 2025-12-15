import React, { useState } from 'react'
import './DescriptionBox.css'
function DescriptionBox() {
    const [activeTab, setActiveTab] = useState('description');
    
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div 
                    className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : 'fade'}`}
                    onClick={() => setActiveTab('description')}
                >
                    Description
                </div>
                <div 
                    className={`descriptionbox-nav-box ${activeTab === 'reviews' ? 'active' : 'fade'}`}
                    onClick={() => setActiveTab('reviews')}
                >
                    Reviews (122)
                </div>
            </div>
            <div className="descriptionbox-description">
                {activeTab === 'description' ? (
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam aliquid quam rem laudantium non. Ducimus amet maiores nisi! Et fuga illum iusto, praesentium reiciendis doloribus minus porro aspernatur tempora non.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam aliquid quam rem laudantium non. Ducimus amet maiores nisi! Et fuga illum iusto, praesentium reiciendis doloribus minus porro aspernatur tempora non.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam aliquid quam rem laudantium non. Ducimus amet maiores nisi! Et fuga illum iusto, praesentium reiciendis doloribus minus porro aspernatur tempora non.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam aliquid quam rem laudantium non. Ducimus amet maiores nisi! Et fuga illum iusto, praesentium reiciendis doloribus minus porro aspernatur tempora non.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam aliquid quam rem laudantium non. Ducimus amet maiores nisi! Et fuga illum iusto, praesentium reiciendis doloribus minus porro aspernatur tempora non.
                    </p>
                ) : (
                    <div className="reviews-section">
                        <div className="review-item">
                            <div className="review-header">
                                <h4>John Doe</h4>
                                <div className="review-rating">★★★★☆</div>
                            </div>
                            <p>Great product! Very satisfied with the quality and fit.</p>
                        </div>
                        <div className="review-item">
                            <div className="review-header">
                                <h4>Jane Smith</h4>
                                <div className="review-rating">★★★★★</div>
                            </div>
                            <p>Excellent quality and fast shipping. Highly recommend!</p>
                        </div>
                        <div className="review-item">
                            <div className="review-header">
                                <h4>Mike Johnson</h4>
                                <div className="review-rating">★★★☆☆</div>
                            </div>
                            <p>Good product but the sizing runs a bit small.</p>
                        </div>
                    </div>
                )}
            </div>
         </div>
    )
}

export default DescriptionBox
