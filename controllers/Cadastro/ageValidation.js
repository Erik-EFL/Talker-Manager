const { errorMessages: {
  invalidAge, noAge,
} } = require('../errorMessage');

const ageValidation = (req, res, next) => {
  const { age } = req.body;

  if (!age) res.status(400).json({ message: noAge });
  if (age < 18) res.status(400).json({ message: invalidAge });
  next();
};

module.exports = ageValidation;
