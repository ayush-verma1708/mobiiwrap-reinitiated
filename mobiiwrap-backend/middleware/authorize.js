export const authorize = (roles = []) => {
  return (req, res, next) => {
    const userRole = req.user.role; // Assuming req.user is populated with user info from JWT

    // Allow access if roles are empty (public access) or if the user's role is included
    if (!roles.length || roles.includes(userRole)) {
      return next();
    }

    return res
      .status(403)
      .json({
        message: 'Access forbidden: You do not have the required permissions.',
      });
  };
};
