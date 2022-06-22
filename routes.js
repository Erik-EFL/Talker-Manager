const express = require('express');

const { validateUser } = require('./controllers/Login/userLogin');
const readFileTalkers = require('./controllers/Usuario/readFileTalker');
const { talkerById, searchTaker } = require('./controllers/Usuario/searchTalker');
const { tokenGenerate, tokenValidate } = require('./controllers/Login/tokenValidate');
const nameValidation = require('./controllers/Cadastro/nameValidation');
const ageValidation = require('./controllers/Cadastro/ageValidation');
const
{ talkValidation, watchedAtValidation, reteValidation,
} = require('./controllers/Cadastro/talkerValidation');
const addNewTalker = require('./controllers/Cadastro/newTalker');
const editTalker = require('./controllers/Usuario/editTalker');
const deleteTalker = require('./controllers/Usuario/deleteTalker');

const routes = express.Router();

routes.get('/talker/search', tokenValidate, searchTaker);
routes.get('/talker', readFileTalkers);
routes.get('/talker/:id', talkerById);

routes.post('/login', validateUser, tokenGenerate);

routes.post('/talker',
tokenValidate,
nameValidation,
ageValidation,
talkValidation,
watchedAtValidation,
reteValidation,
addNewTalker);

routes.put('/talker/:id',
tokenValidate,
nameValidation,
ageValidation,
talkValidation,
watchedAtValidation,
reteValidation,
editTalker);

routes.delete('/talker/:id', tokenValidate, deleteTalker);

module.exports = routes;
