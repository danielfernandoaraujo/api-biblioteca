const express = require("express");

const routes = express.Router();

const Alunos = require("./controllers/alunos.controller");

const Livros = require("./controllers/livros.controller");

const Emprestimos = require("./controllers/emprestimos.controller");

const Turma = require("./controllers/turma.controller");

//Rotas dos alunos
//Create
routes.post("/api/alunos", Alunos.create);
//Read
routes.get("/api/alunos", Alunos.index);
routes.get("/api/alunos.detalhes/:_id", Alunos.details);
//Delete
routes.delete("/api/alunos/:_id", Alunos.delete);
//Update
routes.put("/api/alunos", Alunos.update);

//Rotas dos livros
//Create
routes.post("/api/livros", Livros.create);
//Read
routes.get("/api/livros", Livros.index);
routes.get("/api/livros.detalhes/:_id", Livros.details);
//Delete
routes.delete("/api/livros/:_id", Livros.delete);
//Update
routes.put("/api/livros", Livros.update);

//Rotas dos Emprestimos
//Create
routes.post("/api/emprestimos", Emprestimos.create);
//Read
routes.get("/api/emprestimos", Emprestimos.index);
routes.get("/api/emprestimos.detalhes/:_id", Emprestimos.details);
//Delete
routes.delete("/api/emprestimos/:_id", Emprestimos.delete);
//Update
routes.put("/api/emprestimos", Emprestimos.update); 

//Rotas das Turmas
//Create
routes.post("/api/turma", Turma.create);
//Read
routes.get("/api/turma", Turma.index);
routes.get("/api/turma.detalhes/:_id", Turma.details);
//Delete
routes.delete("/api/turma/:_id", Turma.delete);
//Update
routes.put("/api/turma", Turma.update); 
 
 

module.exports = routes;
