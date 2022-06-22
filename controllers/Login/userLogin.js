/* Requisito 4 */

const { errorMessages } = require('../errorMessage');

const { noEmail, invalidPassword, invalidEmail, noPassword } = errorMessages;

const validateUser = (req, res, next) => {
  const { email, password } = req.body;
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const emailValidate = emailRegex.test(email);

  if (!email) res.status(400).json({ message: noEmail });
  if (!emailValidate) res.status(400).json({ message: invalidEmail });
  if (!password) res.status(400).json({ message: noPassword });
  if (password.length < 6) res.status(400).json({ message: invalidPassword });

  next();
};

module.exports = {
  validateUser,
};
