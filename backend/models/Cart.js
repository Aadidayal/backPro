const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    productId: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1, default: 1 },
    addedAt: { type: Date, default: Date.now },
    lastUpdatedAt: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  totalItems: { type: Number, default: 0 },
  totalPrice: { type: Number, default: 0 }
});

// Update the updatedAt field before saving
cartSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  
  // Ensure items is an array
  if (!Array.isArray(this.items)) {
    this.items = [];
  }
  
  // Calculate totals safely
  this.totalItems = this.items.reduce((sum, item) => {
    if (item && typeof item.quantity === 'number') {
      return sum + item.quantity;
    }
    return sum;
  }, 0);
  
  this.totalPrice = this.items.reduce((sum, item) => {
    if (item && typeof item.price === 'number' && typeof item.quantity === 'number') {
      return sum + (item.price * item.quantity);
    }
    return sum;
  }, 0);
  
  next();
});

// Add validation for items
cartSchema.pre('validate', function(next) {
  if (!Array.isArray(this.items)) {
    this.items = [];
  }
  next();
});

module.exports = mongoose.model('Cart', cartSchema); 