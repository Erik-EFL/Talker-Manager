const { errorMessages: {
  noName, invalidName,
} } = require('../errorMessage');

const nameValidation = (req, res, next) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: noName });

  if (name.length < 3) return res.status(400).json({ message: invalidName });
  
  next();
};

module.exports = nameValidation;
