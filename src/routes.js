const express = require("express");

const routes = express.Router();

const Alunos = require("./controllers/alunos.controller");

const Livros = require("./controllers/livros.controller");

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

module.exports = routes;
