const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const { swaggerUi, swaggerSpec } = require("./config/swagger");

dotenv.config();

const app = express();
app.use(express.json());

// Allow all origins (safe for now)
app.use(cors({
  origin: "*"
}));

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error:", err));

// Routes
app.use("/api", require("./routes/contact.routes"));

app.use("/dl-doc", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/dl", (req, res) => {
  res.send("yes running C L and Associate");
});

// ⭐ IMPORTANT for Vercel
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;   // <--- VERY IMPORTANT FOR VERCEL
