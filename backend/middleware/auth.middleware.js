const jwt = require("jsonwebtoken");

// Validasi JWT custom. Diisi penuh di Fase 1.
function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, error: "Token tidak ada" });
  }

  const token = header.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch {
    return res.status(401).json({ success: false, error: "Token tidak valid" });
  }
}

module.exports = authMiddleware;
