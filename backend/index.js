const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB bağlantısı
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB veritabanına başarılı bir şekilde bağlanıldı");
  })
  .catch((error) => {
    console.error("MongoDB bağlantı hatası:", error);
  });


app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
