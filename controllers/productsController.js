let products = [
  { id: 1, name: 'Apple iPhone 14 Pro Max', category: 'phones', price: 799 },
  { id: 2, name: 'Samsung Galaxy S23', category: 'phones', price: 699 },
  { id: 3, name: 'Samsung Galaxy S24 Ultra', category: 'audio', price: 349 }
];

let nextId = 4;

exports.getAllProducts = (req, res) => {
  const { name, category, minPrice, maxPrice } = req.query;
  let result = products.slice();
  if (name) result = result.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  if (category) result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
  if (minPrice !== undefined && !Number.isNaN(Number(minPrice))) result = result.filter(p => p.price >= Number(minPrice));
  if (maxPrice !== undefined && !Number.isNaN(Number(maxPrice))) result = result.filter(p => p.price <= Number(maxPrice));
  res.json(result);
};

exports.getSingleProduct = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};
