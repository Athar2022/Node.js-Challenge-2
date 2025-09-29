// const Product = require('../models/productModel');

let products = [
  { id: 1, name: 'Apple iPhone 14 Pro Max', category: 'phones', price: 799 },
  { id: 2, name: 'Samsung Galaxy S23', category: 'phones', price: 699 },
  { id: 3, name: 'Samsung Galaxy S24 Ultra', category: 'phones', price: 349 }
];

let nextId = 4;

const getAllProducts = (req, res) => {
  res.status(200).json(products);
};

const getSingleProduct = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(product);
};

const createProduct = (req, res) => {
  const product = { id: nextId++, ...req.body };
  products.push(product);
  res.status(201).json(product);
};

const updateProduct = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  Object.assign(product, req.body);
  res.status(200).json(product);
};

const deleteProduct = (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Product not found' });
  const deleted = products.splice(index, 1);
  res.status(200).json(deleted[0]);
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
