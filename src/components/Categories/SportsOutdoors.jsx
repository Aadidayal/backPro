import React, { useState } from 'react';
import './SportsOutdoors.css';

const SportsOutdoors = ({ onAddToCart }) => {
  const [sortBy, setSortBy] = useState('default');
  
  const sportsOutdoorsProducts = [
    { 
      _id: '1', 
      name: 'Yoga Mat', 
      price: 999, 
      originalPrice: 1499, 
      discount: 33, 
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3',
      category: 'Sports & Outdoors'
    },
    { 
      _id: '2', 
      name: 'Dumbbell Set', 
      price: 2999, 
      originalPrice: 3999, 
      discount: 25, 
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3',
      category: 'Sports & Outdoors'
    },
    { 
      _id: '3', 
      name: 'Camping Tent', 
      price: 4999, 
      originalPrice: 6999, 
      discount: 29, 
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3',
      category: 'Sports & Outdoors'
    },
    { 
      _id: '4', 
      name: 'Running Shoes', 
      price: 3999, 
      originalPrice: 4999, 
      discount: 20, 
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3',
      category: 'Sports & Outdoors'
    },
    { 
      _id: '5', 
      name: 'Cycling Helmet', 
      price: 1499, 
      originalPrice: 1999, 
      discount: 25, 
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3',
      category: 'Sports & Outdoors'
    },
    { 
      _id: '6', 
      name: 'Swimming Goggles', 
      price: 499, 
      originalPrice: 799, 
      discount: 38, 
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3',
      category: 'Sports & Outdoors'
    }
  ];

  const handleAddToCart = (product) => {
    onAddToCart({
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  const sortedProducts = [...sportsOutdoorsProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className="sportsoutdoors-category-page">
      <div className="sportsoutdoors-filter-bar">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
      <h2 className="category-title">Sports & Outdoors</h2>
      <div className="sportsoutdoors-grid">
        {sortedProducts.map(product => (
          <div key={product._id} className="sportsoutdoors-card">
            <img src={product.image} alt={product.name} className="sportsoutdoors-image" />
            <h3 className="sportsoutdoors-name">{product.name}</h3>
            <div className="sportsoutdoors-price-row">
              <span className="sportsoutdoors-price">₹{product.price}</span>
              <span className="sportsoutdoors-original-price">₹{product.originalPrice}</span>
              <span className="sportsoutdoors-discount">{product.discount}% off</span>
            </div>
            <button 
              className="sportsoutdoors-btn"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsOutdoors; 