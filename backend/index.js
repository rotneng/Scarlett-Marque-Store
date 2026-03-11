const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", require("./routes/product"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/staff", require("./routes/staff"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Fashion DB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Runway active on port ${PORT}`));
