const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const { addProduct, getAllProducts } = require('../controllers/productController');

const upload = multer({ storage });

router.post('/add', upload.array('images', 10), addProduct);

router.get('/all', getAllProducts);

module.exports = router;