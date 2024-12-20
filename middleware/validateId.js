// middleware/validateId.js

const mongoose = require("mongoose");

const validateId = (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  next(); // Proceed to the next middleware or route handler
};

module.exports = validateId;
