const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // تحميل المتغيرات البيئية

const app = express();
const schemaClub = require("./schema/schemaClubs");
const schemaCups = require("./schema/schemaCups");
const verifyToken = require("./Middleware/verifyToken");

app.use(express.json());

// ! API Create Cup

//? API POST new cup
app.post("/api_cup", verifyToken, async (req, res) => {
  try {
    const { name, logo } = req.body;
    const data = new schemaCups({ name, logo });
    await data.save();
    res.status(201).json({ message: "✅ Cup Save Done", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "❌ Error on Server" });
  }
});

//? API GET all cups
app.get("/api_cup", verifyToken, async (req, res) => {
  try {
    const data = await schemaCups.find(); // استرجاع جميع البيانات من قاعدة البيانات
    res.status(200).json({ message: "✅ All Cups Retrieved", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "❌ Error on Server" });
  }
});


//? API GET cup by ID 
app.get("/api_cup/:id", verifyToken, async (req, res) => {
  const id = req.params.id; // استخراج الـ id من الطلب
  try {
    const data = await schemaCups.findById(id); // البحث عن الكوب باستخدام الـ id
    if (!data) {
      return res.status(404).json({ error: "❌ Cup not found" });
    }
    res.status(200).json({ message: "✅ Cup Retrieved", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "❌ Error on Server" });
  }
});


//? API Delete cup by ID
app.delete("/api_cup/:id", verifyToken, async (req, res) => {
  const id = req.params.id; // استخراج الـ id من الطلب
  try {
    const data = await schemaCups.findByIdAndDelete(id); // البحث عن الكوب باستخدام الـ id
    if (!data) {
      return res.status(404).json({ error: "❌ Cup not found" });
    }
    res.status(200).json({ message: "✅ Cup Retrieved", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "❌ Error on Server" });
  }
});


//? API Delete all cup  
app.delete("/api_cup", verifyToken, async (req, res) => {
  const id = req.params.id; // استخراج الـ id من الطلب
  try {
    const data = await schemaCups.deleteMany(); // البحث عن الكوب باستخدام الـ id
    if (!data) {
      return res.status(404).json({ error: "❌ Cup not found" });
    }
    res.status(200).json({ message: "✅ Cup Retrieved", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "❌ Error on Server" });
  }
});


// ! API Create Club
 
//? API POST new cup
app.post("/api_club", verifyToken, async (req, res) => {
  try {
    const { name, logo, cupType } = req.body;
    const data = new schemaClub({ name, logo, cupType });
    try {
      const existingCup = await schemaCups.findOne({ name: cupType });
      if (existingCup) {
        await data.save();
        res.status(201).json({ message: "✅ Cup Save Done", data });
        return console.log("✅ Cup with the same name already exists:", existingCup);
      } else {
        res.status(404).json({ message: "❌ Not Saving data" });
        return console.log("❌ No cup found with the same name.");
      }
    } catch (error) {
      res.status(404).json({ message: "❌ Not Saving data" });
      return console.error("❌ Error checking for existing cup:", error);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "❌ Error on Server" });
  }
});

//? API GET all cups
app.get("/api_club", verifyToken, async (req, res) => {
  try {
    const data = await schemaClub.find(); // استرجاع جميع البيانات من قاعدة البيانات
    res.status(200).json({ message: "✅ All Cups Retrieved", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "❌ Error on Server" });
  }
});


//? API GET cup by ID
app.get("/api_club/:id", verifyToken, async (req, res) => {
  const id = req.params.id; // استخراج الـ id من الطلب
  try {
    const data = await schemaClub.findById(id); // البحث عن الكوب باستخدام الـ id
    if (!data) {
      return res.status(404).json({ error: "❌ Cup not found" });
    }
    res.status(200).json({ message: "✅ Cup Retrieved", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "❌ Error on Server" });
  }
});


//? API Delete cup by ID
app.delete("/api_club/:id", verifyToken, async (req, res) => {
  const id = req.params.id; // استخراج الـ id من الطلب
  try {
    const data = await schemaClub.findByIdAndDelete(id); // البحث عن الكوب باستخدام الـ id
    if (!data) {
      return res.status(404).json({ error: "❌ Cup not found" });
    }
    res.status(200).json({ message: "✅ Cup Retrieved", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "❌ Error on Server" });
  }
});


//? API Delete all cup  
app.delete("/api_club", verifyToken, async (req, res) => {
  const id = req.params.id; // استخراج الـ id من الطلب
  try {
    const data = await schemaClub.deleteMany(); // البحث عن الكوب باستخدام الـ id
    if (!data) {
      return res.status(404).json({ error: "❌ Cup not found" });
    }
    res.status(200).json({ message: "✅ Cup Retrieved", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "❌ Error on Server" });
  }
});


app.listen(process.env.PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ DataBase Running");
  } catch (error) {
    console.log("❌", error);
  }
  console.log(`✅ Server Running On ${process.env.PORT}`);
});