const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    codigo_livro: Number,
    titulo_livro: String,
    estoque_livro: Number
})

const livros = mongoose.model ( 'livros' , DataSchema );
module.exports = livros ;