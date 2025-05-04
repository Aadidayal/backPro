import React, { useState } from 'react';
import './BeautyCare.css';

const beautyProducts = [
  { _id: '1', name: 'Natural Skincare Set', price: 1299, originalPrice: 1999, discount: 35, image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3', category: 'Beauty Care' },
  { _id: '2', name: 'Organic Hair Care Bundle', price: 1599, originalPrice: 2299, discount: 30, image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3', category: 'Beauty Care' },
  { _id: '3', name: 'Luxury Makeup Kit', price: 2999, originalPrice: 3999, discount: 25, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3', category: 'Beauty Care' },
  { _id: '4', name: 'Facial Care Essentials', price: 899, originalPrice: 1299, discount: 31, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3', category: 'Beauty Care' },
  { _id: '5', name: 'Aloe Vera Gel', price: 299, originalPrice: 399, discount: 25, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3', category: 'Beauty Care' },
  { _id: '6', name: 'Body Lotion', price: 499, originalPrice: 699, discount: 29, image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3', category: 'Beauty Care' },
  { _id: '7', name: 'Perfume', price: 999, originalPrice: 1499, discount: 33, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3', category: 'Beauty Care' },
  { _id: '8', name: 'Face Mask Pack', price: 399, originalPrice: 599, discount: 33, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3', category: 'Beauty Care' }
];

const BeautyCare = ({ onAddToCart }) => {
  const [sortBy, setSortBy] = useState('default');
  
  const sortedProducts = [...beautyProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  const handleAddToCart = (product) => {
    onAddToCart({
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  };

  return (
    <div className="beautycare-category-page">
      <div className="beautycare-filter-bar">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
      <h2 className="category-title">Beauty & Personal Care</h2>
      <div className="beautycare-grid">
        {sortedProducts.map(product => (
          <div key={product._id} className="beautycare-card">
            <img src={product.image} alt={product.name} className="beautycare-image" />
            <h3 className="beautycare-name">{product.name}</h3>
            <div className="beautycare-price-row">
              <span className="beautycare-price">₹{product.price}</span>
              <span className="beautycare-original-price">₹{product.originalPrice}</span>
              <span className="beautycare-discount">{product.discount}% off</span>
            </div>
            <button 
              className="beautycare-btn"
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

export default BeautyCare; 