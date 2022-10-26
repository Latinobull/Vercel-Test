const express = require('express');
const app = express();
const product = require('./api/product');
const htmlRoutes = require('./home/index');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/product', product);
app.use('/', htmlRoutes);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
