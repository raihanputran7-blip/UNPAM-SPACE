require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (_req, res) => {
  res.json({ success: true, data: { message: "Unpam Space API berjalan" } });
});

// Routes (diisi bertahap mulai Fase 1)
app.use("/auth", require("./routes/auth"));

app.listen(PORT, () => {
  console.log(`Unpam Space API berjalan di http://localhost:${PORT}`);
});
