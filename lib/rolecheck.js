export function getRoleFromToken(token) {
  if (!token) return null;

  try {
    const decoded = JSON.parse(atob(token.split(".")[1]));
    return decoded.role;
  } catch (error) {
    return null;
  }
}
