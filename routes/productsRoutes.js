const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

console.log("✅ productsRoutes.js loaded successfully!");

// ✅ هذا راوت اختباري للتأكد أن ملف الراوت يعمل
router.get('/test', (req, res) => {
  res.send('Test route is working');
});

// CRUD Routes
router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getSingleProduct);
router.post('/', productsController.createProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);

module.exports = router;


