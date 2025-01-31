const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // تحميل المتغيرات البيئية

const app = express();
const schemaClub = require("./schema/schemaClubs");
const verifyToken = require("./Middleware/verifyToken");

app.use(express.json());



//? API POST new cup
app.post("/api_cup", verifyToken, async (req, res) => {
  try {
    const { name, logo } = req.body;
    const data = new schemaClub({ name, logo });
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
    const data = await schemaClub.find(); // استرجاع جميع البيانات من قاعدة البيانات
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





app.listen(process.env.PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ DataBase Running");
  } catch (error) {
    console.log("❌", error);
  }
  console.log(`✅ Server Running On ${process.env.PORT}`);
});