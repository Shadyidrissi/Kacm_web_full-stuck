const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // تحميل المتغيرات البيئية

const app = express();
const schemaClub = require("./schema/schemaClubs");
const verifyToken = require("./Middleware/verifyToken");

app.use(express.json());

// API محمي بالتوكن
app.post("/api_cup", verifyToken, async (req, res) => {
  try {
    const { name, logo } = req.body;
    const data = new schemaClub({ name, logo });
    await data.save();
    res.status(201).json({ message: "تم حفظ الكأس بنجاح", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "خطأ داخلي في الخادم" });
  }
});

app.listen(process.env.PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ تم الاتصال بقاعدة البيانات");
  } catch (error) {
    console.log("❌", error);
  }
  console.log(`✅ الخادم يعمل على المنفذ ${process.env.PORT}`);
});