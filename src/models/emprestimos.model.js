const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome_aluno: String,
    nome_livro: String,
    data_prazo: Date,
    data_atual: Date
})

const emprestimos = mongoose.model ( 'emprestimos' , DataSchema );
module.exports = emprestimos ;