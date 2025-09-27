const express = require('express');
const productsRouter = require('./routes/productsRoutes');

const app = express();
app.use(express.json());
app.use('/api/products', productsRouter);

app.get('/', (req, res) => res.send('Products API is running'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
