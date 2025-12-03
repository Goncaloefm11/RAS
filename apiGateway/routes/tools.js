const express = require("express");
const router = express.Router();
const multer = require("multer");
const axios = require("axios");

const upload = multer();

router.post("/generative-expand", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Nenhum ficheiro enviado" });
    }

    const response = await axios.post(
      "http://generative_expand_ai:8000/expand",
      req.file.buffer,
      {
        headers: { "Content-Type": "application/octet-stream" }
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error("Erro no generative_expand:", err);
    res.status(500).json({ error: "Erro ao expandir imagem" });
  }
});

module.exports = router;
