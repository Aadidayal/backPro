const mongoose = require('mongoose');
const Product = require('../models/Product');
const Category = require('../models/Category');

// All categories with their products
const categories = [
  {
    name: 'Groceries & Essentials',
    description: 'Fresh fruits, vegetables, daily essentials, and more at the best prices',
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    products: [
      {
        name: 'Fresh Apples (1kg)',
        description: 'Fresh and juicy apples from local farms',
        price: 199,
        originalPrice: 249,
        discount: 20,
        imageUrl: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3',
        stock: 100,
        rating: 4.5,
        reviews: 50
      },
      {
        name: 'Organic Milk (1L)',
        description: 'Fresh organic milk from grass-fed cows',
        price: 99,
        originalPrice: 129,
        discount: 23,
        imageUrl: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3',
        stock: 200,
        rating: 4.7,
        reviews: 120
      },
      {
        name: 'Whole Wheat Bread',
        description: 'Freshly baked whole wheat bread',
        price: 45,
        originalPrice: 60,
        discount: 25,
        imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3',
        stock: 150,
        rating: 4.3,
        reviews: 75
      },
      {
        name: 'Fresh Eggs (12)',
        description: 'Farm fresh eggs',
        price: 89,
        originalPrice: 99,
        discount: 10,
        imageUrl: 'https://images.unsplash.com/photo-1587486913049-53fc88980cfc?ixlib=rb-4.0.3',
        stock: 100,
        rating: 4.6,
        reviews: 90
      },
      {
        name: 'Basmati Rice (1kg)',
        description: 'Premium quality basmati rice',
        price: 129,
        originalPrice: 149,
        discount: 13,
        imageUrl: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3',
        stock: 200,
        rating: 4.5,
        reviews: 150
      },
      {
        name: 'Extra Virgin Olive Oil',
        description: 'Pure extra virgin olive oil',
        price: 399,
        originalPrice: 499,
        discount: 20,
        imageUrl: 'https://images.unsplash.com/photo-1594282406314-6312a4bf6a1b?ixlib=rb-4.0.3',
        stock: 100,
        rating: 4.6,
        reviews: 85
      }
    ]
  },
  {
    name: 'Electronics',
    description: 'Latest smartphones, laptops, accessories with best deals',
    imageUrl: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    products: [
      {
        name: 'Wireless Noise Cancelling Headphones',
        description: 'Premium wireless headphones with active noise cancellation',
        price: 4999,
        originalPrice: 7999,
        discount: 38,
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3',
        stock: 50,
        rating: 4.5,
        reviews: 120
      },
      {
        name: 'Smart Watch with Health Tracking',
        description: 'Feature-rich smartwatch with health monitoring',
        price: 3999,
        originalPrice: 5999,
        discount: 33,
        imageUrl: 'https://images.unsplash.com/photo-1545579133-99bb5ab189bd?ixlib=rb-4.0.3',
        stock: 30,
        rating: 4.8,
        reviews: 85
      },
      {
        name: 'Portable Bluetooth Speaker',
        description: 'High-quality portable speaker with deep bass',
        price: 1999,
        originalPrice: 2999,
        discount: 33,
        imageUrl: 'https://images.unsplash.com/photo-1606220588911-5117e7648a6a?ixlib=rb-4.0.3',
        stock: 100,
        rating: 4.3,
        reviews: 200
      },
      {
        name: 'Wireless Earbuds Pro',
        description: 'Premium wireless earbuds with noise cancellation',
        price: 2999,
        originalPrice: 4499,
        discount: 33,
        imageUrl: 'https://images.unsplash.com/photo-1606220588911-5117e7648a6a?ixlib=rb-4.0.3',
        stock: 75,
        rating: 4.6,
        reviews: 150
      },
      {
        name: 'Tablet with Stylus',
        description: 'Powerful tablet with precision stylus',
        price: 12999,
        originalPrice: 15999,
        discount: 19,
        imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3',
        stock: 40,
        rating: 4.7,
        reviews: 95
      },
      {
        name: 'Smartphone',
        description: 'Latest smartphone with amazing camera',
        price: 24999,
        originalPrice: 29999,
        discount: 17,
        imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3',
        stock: 60,
        rating: 4.4,
        reviews: 45
      }
    ]
  },
  {
    name: 'Fashion',
    description: 'Trending clothes, footwear, and accessories for men, women & kids',
    imageUrl: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    products: [
      {
        name: "Men's Casual Shirt",
        description: 'Comfortable and stylish casual shirt',
        price: 999,
        originalPrice: 1499,
        discount: 33,
        imageUrl: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3',
        stock: 150,
        rating: 4.3,
        reviews: 75
      },
      {
        name: "Women's Dress",
        description: 'Elegant dress for all occasions',
        price: 1499,
        originalPrice: 1999,
        discount: 25,
        imageUrl: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3',
        stock: 100,
        rating: 4.6,
        reviews: 90
      },
      {
        name: 'Running Shoes',
        description: 'Comfortable running shoes for all terrains',
        price: 2999,
        originalPrice: 3999,
        discount: 25,
        imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3',
        stock: 60,
        rating: 4.7,
        reviews: 95
      },
      {
        name: 'Designer Handbag',
        description: 'Stylish designer handbag',
        price: 3999,
        originalPrice: 4999,
        discount: 20,
        imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3',
        stock: 30,
        rating: 4.4,
        reviews: 45
      },
      {
        name: "Men's Watch",
        description: 'Elegant men\'s watch',
        price: 4999,
        originalPrice: 5999,
        discount: 17,
        imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3',
        stock: 40,
        rating: 4.7,
        reviews: 60
      },
      {
        name: "Women's Sunglasses",
        description: 'Stylish women\'s sunglasses',
        price: 1999,
        originalPrice: 2499,
        discount: 20,
        imageUrl: 'https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3',
        stock: 80,
        rating: 4.4,
        reviews: 110
      }
    ]
  },
  {
    name: 'Home & Kitchen',
    description: 'Everything for your home and kitchen needs',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3',
    products: [
      {
        name: 'Non-Stick Cookware Set',
        description: 'Complete set of non-stick cookware',
        price: 2999,
        originalPrice: 3999,
        discount: 25,
        imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3',
        stock: 40,
        rating: 4.7,
        reviews: 60
      },
      {
        name: 'Air Fryer',
        description: 'Healthy cooking with air fryer',
        price: 3999,
        originalPrice: 4999,
        discount: 20,
        imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3',
        stock: 30,
        rating: 4.4,
        reviews: 45
      },
      {
        name: 'Coffee Maker',
        description: 'Automatic coffee maker',
        price: 1999,
        originalPrice: 2999,
        discount: 33,
        imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3',
        stock: 50,
        rating: 4.5,
        reviews: 120
      },
      {
        name: 'Food Processor',
        description: 'Multi-functional food processor',
        price: 2499,
        originalPrice: 3499,
        discount: 29,
        imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3',
        stock: 30,
        rating: 4.8,
        reviews: 85
      },
      {
        name: 'Dinnerware Set',
        description: 'Complete dinnerware set',
        price: 1499,
        originalPrice: 1999,
        discount: 25,
        imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3',
        stock: 100,
        rating: 4.3,
        reviews: 200
      },
      {
        name: 'Kitchen Scale',
        description: 'Digital kitchen scale',
        price: 999,
        originalPrice: 1499,
        discount: 33,
        imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3',
        stock: 75,
        rating: 4.6,
        reviews: 150
      }
    ]
  },
  {
    name: 'Beauty & Personal Care',
    description: 'Premium beauty and personal care products',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3',
    products: [
      {
        name: 'Natural Skincare Set',
        description: 'Complete natural skincare set',
        price: 1299,
        originalPrice: 1999,
        discount: 35,
        imageUrl: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3',
        stock: 50,
        rating: 4.5,
        reviews: 120
      },
      {
        name: 'Organic Hair Care Bundle',
        description: 'Complete organic hair care solution',
        price: 1599,
        originalPrice: 2299,
        discount: 30,
        imageUrl: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3',
        stock: 30,
        rating: 4.8,
        reviews: 85
      },
      {
        name: 'Luxury Makeup Kit',
        description: 'Premium makeup kit with all essentials',
        price: 2999,
        originalPrice: 3999,
        discount: 25,
        imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3',
        stock: 100,
        rating: 4.3,
        reviews: 200
      },
      {
        name: 'Facial Care Essentials',
        description: 'Complete facial care routine',
        price: 899,
        originalPrice: 1299,
        discount: 31,
        imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3',
        stock: 75,
        rating: 4.6,
        reviews: 150
      },
      {
        name: 'Aloe Vera Gel',
        description: 'Pure aloe vera gel for skin care',
        price: 299,
        originalPrice: 399,
        discount: 25,
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3',
        stock: 200,
        rating: 4.5,
        reviews: 120
      },
      {
        name: 'Body Lotion',
        description: 'Moisturizing body lotion',
        price: 499,
        originalPrice: 699,
        discount: 29,
        imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3',
        stock: 150,
        rating: 4.7,
        reviews: 95
      },
      {
        name: 'Perfume',
        description: 'Premium fragrance',
        price: 999,
        originalPrice: 1499,
        discount: 33,
        imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3',
        stock: 60,
        rating: 4.4,
        reviews: 45
      },
      {
        name: 'Face Mask Pack',
        description: 'Set of face masks',
        price: 399,
        originalPrice: 599,
        discount: 33,
        imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-4.0.3',
        stock: 100,
        rating: 4.6,
        reviews: 85
      }
    ]
  },
  {
    name: 'Sports & Outdoors',
    description: 'Sports gear and outdoor equipment',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3',
    products: [
      {
        name: 'Yoga Mat',
        description: 'Premium quality yoga mat',
        price: 999,
        originalPrice: 1499,
        discount: 33,
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3',
        stock: 50,
        rating: 4.5,
        reviews: 120
      },
      {
        name: 'Dumbbell Set',
        description: 'Complete dumbbell set for home workout',
        price: 2999,
        originalPrice: 3999,
        discount: 25,
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3',
        stock: 30,
        rating: 4.8,
        reviews: 85
      },
      {
        name: 'Camping Tent',
        description: 'Spacious camping tent for 4 people',
        price: 4999,
        originalPrice: 6999,
        discount: 29,
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3',
        stock: 20,
        rating: 4.7,
        reviews: 60
      },
      {
        name: 'Running Shoes',
        description: 'Comfortable running shoes for all terrains',
        price: 3999,
        originalPrice: 4999,
        discount: 20,
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3',
        stock: 40,
        rating: 4.6,
        reviews: 90
      },
      {
        name: 'Cycling Helmet',
        description: 'Safety certified cycling helmet',
        price: 1499,
        originalPrice: 1999,
        discount: 25,
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3',
        stock: 60,
        rating: 4.5,
        reviews: 75
      },
      {
        name: 'Swimming Goggles',
        description: 'Anti-fog swimming goggles',
        price: 499,
        originalPrice: 799,
        discount: 38,
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3',
        stock: 100,
        rating: 4.4,
        reviews: 110
      }
    ]
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/ecommerce', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Clear existing data
    await Category.deleteMany({});
    await Product.deleteMany({});

    // Insert categories
    const insertedCategories = await Category.insertMany(categories.map(({ name, description, imageUrl }) => ({
      name,
      description,
      imageUrl
    })));
    console.log('Categories seeded successfully');

    // Add category IDs to products and insert them
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i];
      const categoryId = insertedCategories[i]._id;
      
      const productsWithCategory = category.products.map(product => ({
        ...product,
        categoryId
      }));

      await Product.insertMany(productsWithCategory);
      console.log(`Products for ${category.name} seeded successfully`);
    }

    // Close connection
    await mongoose.connection.close();
    console.log('Database seeding completed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase(); 