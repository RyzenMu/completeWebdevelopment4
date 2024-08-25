const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require('./routes/product.route');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use("/api/products", productRoute);

// mongoose connection
mongoose
  .connect(
    "mongodb+srv://user:test@cluster0.ev4mn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("db connected");
  })
  .catch(() => {
    console.log("not connected");
  });

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

app.get("/", (req, res) => {
  res.send("<h1>Hello from Node API updated</h1>");
});

//getting products from mongodb
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update a product
app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedId = await Product.findById(id);
    res.status(200).json({ updatedId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete a product
app.delete("/api/products/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product){
      return res.status(400).json({message : "Id not found"});
    }
    res.status(200).json({ message : "product deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
