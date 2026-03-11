const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  try {
    const imageUrls = req.files.map((file) => file.path);

    const newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      images: imageUrls,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json({
      success: true,
      message: "Fashion item added successfully!",
      product: savedProduct,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
