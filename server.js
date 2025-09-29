const express = require('express');
const productsRouter = require('./routes/productsRoutes');

const app = express();
app.use(express.json());
app.use('/api/products', productsRouter);

app.get('/', (req, res) => res.send('Products API is running'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

//Database Conection Code
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log(`Request received at: ${new Date().toISOString()}`);
  next();
});

mongoose.connect(process.env.DB_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
