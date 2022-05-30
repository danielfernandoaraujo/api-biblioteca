const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome: String,
    turma: String,
    email: String,
    telefone: String,
})

const alunos = mongoose.model ( 'alunos' , DataSchema );
module.exports = alunos ;