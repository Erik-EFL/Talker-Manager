const errorMessages = {
  noEmail: 'O campo "email" é obrigatório',
  invalidEmail: 'O "email" deve ter o formato "email@email.com"',
  noPassword: 'O campo "password" é obrigatório',
  invalidPassword: 'O "password" deve ter pelo menos 6 caracteres',
  noToken: 'Token não encontrado',
  invalidToken: 'Token inválido',
  noName: 'O campo "name" é obrigatório',
  invalidName: 'O "name" deve ter pelo menos 3 caracteres',
  noAge: 'O campo "age" é obrigatório',
  invalidAge: 'A pessoa palestrante deve ser maior de idade',
  noTalk: 'O campo "talk" é obrigatório',
  noRate: 'O campo "rate" é obrigatório',
  invalidRate: 'O campo "rate" deve ser um inteiro de 1 à 5',
  noWatchedAt: 'O campo "watchedAt" é obrigatório',
  invalidWatchedAt: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
};

module.exports = {
  errorMessages,
};
