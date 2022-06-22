const crypto = require('crypto-random-string');

const tokenGenerate = (_req, res) => {
  const token = crypto(16);
  res.status(200).json({ token });
};

const tokenValidate = (req, res, next) => {
  const { authorization: token } = req.headers;
  
  if (!token) res.status(401).json({ message: 'Token não encontrado' });
  if (token.length !== 16) res.status(401).json({ message: 'Token inválido' });

  next();
};

module.exports = {
  tokenGenerate,
  tokenValidate,
};
