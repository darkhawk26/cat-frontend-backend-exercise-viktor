require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
const Cat = require("./models/Cat");

const app = express();
app.use(cors());
app.use(express.json());



const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error("❌ MONGO_URI is not defined in .env file!");
  process.exit(1); // Спира сървъра
}

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("🔗 Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const PORT = process.env.PORT || 5006;
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));




// 🐱 GET /cats - Връща всички котки
app.get("/cats", async (req, res) => {
    const cats = await Cat.find();
    res.json(cats);
  });
  
  // 🐱 POST /cats - Добавя нова котка
  app.post("/cats", async (req, res) => {
    const { name, age, breed } = req.body;
    if (!name || !age || !breed) {
      return res.status(400).json({ error: "Всички полета са задължителни." });
    }
    const newCat = new Cat({ name, age, breed });
    await newCat.save();
    res.status(201).json(newCat);
  });
  
  // 🐱 PUT /cats/:id - Обновява котка по ID
  app.put("/cats/:id", async (req, res) => {
    const { id } = req.params;
    const { name, age, breed } = req.body;
    const updatedCat = await Cat.findByIdAndUpdate(id, { name, age, breed }, { new: true });
    if (!updatedCat) return res.status(404).json({ error: "Котката не е намерена." });
    res.json(updatedCat);
  });
  
  // 🐱 DELETE /cats/:id - Изтрива котка по ID
  app.delete("/cats/:id", async (req, res) => {
    const { id } = req.params;
    const deletedCat = await Cat.findByIdAndDelete(id);
    if (!deletedCat) return res.status(404).json({ error: "Котката не е намерена." });
    res.status(204).send();
  });


