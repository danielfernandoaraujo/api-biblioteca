const express = require("express");

const routes = express.Router();

const Alunos = require("./controllers/alunos.controller");

routes.get('/', Alunos.index);

//Rotas dos alunos
  //Create
routes.post('/api/alunos', Alunos.create);
  //Read
routes.get('/api/alunos', Alunos.index);
routes.get('/api/alunos.detalhes/:_id', Alunos.details);
  //Delete
routes.delete('/api/alunos/:_id', Alunos.delete);
  //Update
routes.put('/api/alunos', Alunos.update)

module.exports = routes;
