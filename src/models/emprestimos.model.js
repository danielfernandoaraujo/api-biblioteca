const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    nome_aluno: String,
    nome_livro: String,
    data_prazo: String,
    data_atual: String
})

const emprestimos = mongoose.model ( 'emprestimos' , DataSchema );
module.exports = emprestimos ;