const { errorMessages: {
  invalidRate, noRate, invalidWatchedAt, noWatchedAt,
} } = require('../errorMessage');

const talkValidation = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) res.status(400).json({ message: 'O campo "talk" é obrigatório' });

  next();
};

const watchedAtValidation = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  const formatDate = /^\d{2}\/\d{2}\/\d{4}$/;

  if (!watchedAt) res.status(400).json({ message: noWatchedAt });
  if (!formatDate.test(watchedAt)) res.status(400).json({ message: invalidWatchedAt });

  next();
};

const reteValidation = (req, res, next) => {
  const { talk: { rate } } = req.body;
  if (!rate && rate !== 0) res.status(400).json({ message: noRate });
  if (rate < 1 || rate > 5)res.status(400).json({ message: invalidRate });

  next();
};

module.exports = {
  talkValidation,
  watchedAtValidation,
  reteValidation,
};
