const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    turma_aluno: String,
})

const turma = mongoose.model ( 'turma' , DataSchema );
module.exports = turma ;