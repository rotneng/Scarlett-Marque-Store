const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "Please add a product name"], 
    trim: true 
  },
  description: { 
    type: String, 
    required: [true, "Please add a description"] 
  },
  price: { 
    type: Number, 
    required: [true, "Please add a price"] 
  },
  category: { 
    type: String, 
    enum: ['Menswear', 'Womenswear', 'Accessories', 'Full Collection'], // Restricts to these values
    default: 'Full Collection'
  },
  images: { 
    type: [String], 
    required: true 
  },
  featured: { 
    type: Boolean, 
    default: false 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Product', ProductSchema);