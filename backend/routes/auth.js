const express = require("express");
const router = express.Router();

// Placeholder Fase 0 — implementasi register/login JWT dikerjakan di Fase 1 (Dev B).
router.post("/register", (_req, res) => {
  res.status(501).json({ success: false, error: "Belum diimplementasi (Fase 1)" });
});

router.post("/login", (_req, res) => {
  res.status(501).json({ success: false, error: "Belum diimplementasi (Fase 1)" });
});

module.exports = router;
