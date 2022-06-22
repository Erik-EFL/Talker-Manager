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

/* Rota para procurar palestrantes por termos */
routes.get('/talker/search', tokenValidate, searchTaker);
/* Rota para visualizar todos os palestrantes */
routes.get('/talker', readFileTalkers);
/* Rota para pesquisar palestrantes por ID */
routes.get('/talker/:id', talkerById);
/* Rota para Login */
routes.post('/login', validateUser, tokenGenerate);
/* Rota para criar e validar novos palestrantes */
routes.post('/talker',
tokenValidate,
nameValidation,
ageValidation,
talkValidation,
watchedAtValidation,
reteValidation,
addNewTalker);
/* Rota para editar e validar novos palestrantes */
routes.put('/talker/:id',
tokenValidate,
nameValidation,
ageValidation,
talkValidation,
watchedAtValidation,
reteValidation,
editTalker);
/* Rota para deletar palestrantes existentes */
routes.delete('/talker/:id', tokenValidate, deleteTalker);

module.exports = routes;
