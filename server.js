require("dotenv").config();
const fs=require('fs')
const mongoose = require('mongoose');
const express = require('express')

app.use(express.json());
app.use(express.static("client/build"));
const app = express();
const port = process.env.PORT || 5000;

const productSchema = new mongoose.Schema({
    id: Number,
    title: String, 
    price: Number,
    description: String,
    category:   String,
    image: String,
    rating: {
        rate: Number,
      count:  Number
    }
});
const Product= mongoose.Model("Product",productSchema);

app.get("/api/products", (req, res) => {
  fs.readFile("./api/products.json","utf8",(err,data)=>{
      const productsJ=JSON.parse(data);
fs.writeFile("./products.json",JSON.stringify(productsJ),(err)=>{
    res.send(productsJ);

})
  });
});
app.get("/api/products/:id", (req, res) => {
    const { id }=req.params;
    fs.readFile("./api/products.json","utf8",(err,data)=>{
        const productsJ=JSON.parse(data);
        const productJ=productsJ.find((productJ)=>productJ.id===+id);
        res.send(productJ);
    });
  });

const initProducts = () => {
    Product.findOne((err, productJ) => {
      if (!productJ) {
        fs.readFile("./api/products.json", "utf8", (err, data) => {
          const productsJ = JSON.parse(data);
          Product.insertMany(productsJ, (err, productsRes) => {
            // res.send(todosRes);
          });
        });
      }
    });
  };
  
  const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
app.listen(port);
 
console.log(`Listening on ${port}`);
  mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      app.listen(process.env.PORT || 5000, () => {
        console.log("err", err);
        console.log("Ani maazin!");
        initProducts();
      });
    }
  );

  app.get('*', (req, res) => {
    res.sendFile(__dirname+'/client/build/index.html');
  });