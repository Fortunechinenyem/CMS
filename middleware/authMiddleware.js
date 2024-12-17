import jwt from "jsonwebtoken";

export function authenticate(req, res, next, roles = []) {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (roles.length && !roles.includes(decoded.role)) {
      return res.status(403).json({ message: "Access denied" });
    }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
}
