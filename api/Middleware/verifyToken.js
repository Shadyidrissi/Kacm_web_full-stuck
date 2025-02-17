const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({ error: "❌ You Are Not Auth" });
  }

  const token = authHeader.split(" ")[1]; // استخراج التوكن
  if (!token) {
    return res.status(403).json({ error: "❌ You Are Not Auth" });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "❌ Error" });
    }
    req.user = decoded; // إرفاق بيانات المستخدم بالطلب
    next();
  });
};

module.exports = verifyToken;