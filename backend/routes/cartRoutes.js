const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Product = require('../models/Product');
const authenticateToken = require('../middleware/auth');

// Get user's cart
router.get('/', authenticateToken, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.userId });
    
    if (!cart) {
      return res.json({ items: [], totalItems: 0, totalPrice: 0 });
    }
    
    res.json({
      items: cart.items,
      totalItems: cart.totalItems,
      totalPrice: cart.totalPrice
    });
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ message: 'Error fetching cart', error: error.message });
  }
});

// Add item to cart
router.post('/add', authenticateToken, async (req, res) => {
  try {
    const { _id, name, price, imageUrl, quantity = 1 } = req.body;
    
    if (!_id) {
      return res.status(400).json({ message: 'Product ID is required' });
    }

    let cart = await Cart.findOne({ userId: req.user.userId });

    if (!cart) {
      cart = new Cart({
        userId: req.user.userId,
        items: [{
          productId: _id,
          name: name,
          price: price,
          image: imageUrl,
          quantity: quantity,
          addedAt: new Date(),
          lastUpdatedAt: new Date()
        }]
      });
    } else {
      const existingItem = cart.items.find(item => item.productId === _id);
      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.lastUpdatedAt = new Date();
      } else {
        cart.items.push({
          productId: _id,
          name: name,
          price: price,
          image: imageUrl,
          quantity: quantity,
          addedAt: new Date(),
          lastUpdatedAt: new Date()
        });
      }
    }

    await cart.save();
    console.log(`User ${req.user.userId} added product ${_id} to cart`);
    
    // Return the updated cart with all items
    const updatedCart = await Cart.findOne({ userId: req.user.userId });
    res.json({
      items: updatedCart.items,
      totalItems: updatedCart.totalItems,
      totalPrice: updatedCart.totalPrice
    });
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ message: 'Error adding to cart', error: error.message });
  }
});

// Remove item from cart
router.delete('/remove/:productId', authenticateToken, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const itemIndex = cart.items.findIndex(item => item.productId === req.params.productId);
    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    const removedItem = cart.items[itemIndex];
    cart.items.splice(itemIndex, 1);
    await cart.save();

    // Return the updated cart
    const updatedCart = await Cart.findOne({ userId: req.user.userId });
    res.json({
      items: updatedCart.items,
      totalItems: updatedCart.totalItems,
      totalPrice: updatedCart.totalPrice
    });
  } catch (error) {
    console.error('Error removing from cart:', error);
    res.status(500).json({ message: 'Error removing from cart', error: error.message });
  }
});

// Update item quantity
router.put('/update/:productId', authenticateToken, async (req, res) => {
  try {
    const { quantity } = req.body;
    const cart = await Cart.findOne({ userId: req.user.userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const item = cart.items.find(item => item.productId === req.params.productId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    item.quantity = quantity;
    item.lastUpdatedAt = new Date();
    await cart.save();

    // Return the updated cart
    const updatedCart = await Cart.findOne({ userId: req.user.userId });
    res.json({
      items: updatedCart.items,
      totalItems: updatedCart.totalItems,
      totalPrice: updatedCart.totalPrice
    });
  } catch (error) {
    console.error('Error updating cart:', error);
    res.status(500).json({ message: 'Error updating cart', error: error.message });
  }
});

// Clear cart
router.delete('/clear', authenticateToken, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user.userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = [];
    await cart.save();

    res.json({ message: 'Cart cleared successfully' });
  } catch (error) {
    console.error('Error clearing cart:', error);
    res.status(500).json({ message: 'Error clearing cart', error: error.message });
  }
});

module.exports = router;
