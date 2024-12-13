export default function roleMiddleware(roles) {
  return async (req, res, next) => {
    const userRole = req.session.user?.role;
    if (!roles.includes(userRole)) {
      return res.status(403).json({ error: "Access denied" });
    }
    next();
  };
}
