import React, { useState } from 'react';
import './HomeKitchen.css';

const HomeKitchen = ({ onAddToCart }) => {
  const [sortBy, setSortBy] = useState('default');
  
  const homeKitchenProducts = [
    { 
      _id: '1', 
      name: 'Non-Stick Cookware Set', 
      price: 2999, 
      originalPrice: 3999, 
      discount: 25, 
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3',
      category: 'Home & Kitchen'
    },
    { 
      _id: '2', 
      name: 'Air Fryer', 
      price: 3999, 
      originalPrice: 4999, 
      discount: 20, 
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3',
      category: 'Home & Kitchen'
    },
    { 
      _id: '3', 
      name: 'Coffee Maker', 
      price: 1999, 
      originalPrice: 2999, 
      discount: 33, 
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3',
      category: 'Home & Kitchen'
    },
    { 
      _id: '4', 
      name: 'Food Processor', 
      price: 2499, 
      originalPrice: 3499, 
      discount: 29, 
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3',
      category: 'Home & Kitchen'
    },
    { 
      _id: '5', 
      name: 'Dinnerware Set', 
      price: 1499, 
      originalPrice: 1999, 
      discount: 25, 
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3',
      category: 'Home & Kitchen'
    },
    { 
      _id: '6', 
      name: 'Kitchen Scale', 
      price: 999, 
      originalPrice: 1499, 
      discount: 33, 
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3',
      category: 'Home & Kitchen'
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

  const sortedProducts = [...homeKitchenProducts].sort((a, b) => {
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
    <div className="homekitchen-category-page">
      <div className="homekitchen-filter-bar">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
      <h2 className="category-title">Home & Kitchen</h2>
      <div className="homekitchen-grid">
        {sortedProducts.map(product => (
          <div key={product._id} className="homekitchen-card">
            <img src={product.image} alt={product.name} className="homekitchen-image" />
            <h3 className="homekitchen-name">{product.name}</h3>
            <div className="homekitchen-price-row">
              <span className="homekitchen-price">₹{product.price}</span>
              <span className="homekitchen-original-price">₹{product.originalPrice}</span>
              <span className="homekitchen-discount">{product.discount}% off</span>
            </div>
            <button 
              className="homekitchen-btn"
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

export default HomeKitchen; 