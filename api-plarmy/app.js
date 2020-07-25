const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
   next();
});

//MODELS 
const Product = require('./models/product');

//CONTROLLERS
const product_controller = require('./controllers/productController');

//ROUTES
const productRoutes = require('./routes/productRoutes');

mongoose
   .connect('mongodb://localhost/api-plarmy', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
   })
   .then(() => {
      console.log("Connected to DB!");
   })
   .catch((err) => {
      console.log("ERROR:" + err.message);
   });


app.use('/api', productRoutes);

app.listen(4000, () => {
   console.log('App has started on port 4000');
});