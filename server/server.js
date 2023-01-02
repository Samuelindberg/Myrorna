require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
mongoose.set("strictQuery", false);
const Product = require("./models/productlist");
mongoose.connect(process.env.DATABASE_URL, () => {
  console.log("connected to port 4000");
});
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch {
    res.status(500).json({ message: err.message });
  }
});
app.get("/products/handpicked", async (req, res) => {
  try {
    const products = await Product.find({ handpicked: true }).limit(4);
    res.json(products);
  } catch {
    res.status(500).json({ message: err.message });
  }
});
app.get("/products/handpickedproducts", async (req, res) => {
  try {
    const products = await Product.find({ handpicked: true });
    res.json(products);
  } catch {
    res.status(500).json({ message: err.message });
  }
});
app.listen(4000, () => {
  console.log("server started on port:4000");
});

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "af3cbcea2amsh027a1dfa5925646p10930bjsn5a412ced589a",
    "X-RapidAPI-Host": "asos2.p.rapidapi.com",
  },
};
fetch(
  "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=50&country=US&sort=freshness&q=pants&currency=USD&sizeSchema=US&lang=en-US'",
  options
)
  .then((response) => response.json())
  .then((response) => {
    response.products.forEach((product) => {
      try {
        const item = new Product({
          name: product.name,
          size: "31/34",
          imgUrl: product.imageUrl,
          price: product.price.current.value,
          color: product.colour,
          id: product.productCode,
          brandName: product.brandName,
          handpicked: false,
          type: "Pants",
        });
        item.save((error) => {
          if (error) {
            console.log(error);
          } else {
            console.log("saved succesfully");
          }
        });
      } catch {
        console.log("Invalid item");
      }
    });
    console.log(response);
  })
  .catch((err) => console.error(err));

Product.countDocuments((error, count) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Number of products: ${count}`);
  }
});

// Count the number of products that have the key "brandName"
// Product.countDocuments({ brandName: { $exists: true } }, (error, count) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(`Number of products with the key "brandName": ${count}`);
//   }
// });
// Product.updateMany(
//   { type: "sweater", price: { $gt: 50 } },
//   // Set the `handpicked` field to `true`
//   { $set: { handpicked: true } }
// )
//   .then(() => {
//     console.log("Documents updated");
//   })
//   .catch((error) => {
//     console.log(error);
//   });
