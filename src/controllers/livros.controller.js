const Livros = require("../models/livros.model");

module.exports = {
  async index(req, res) {
    const livro = await Livros.find({});
    res.status(200).json(livro);
  },
  //C
  async create(req, res) {
    const { codigo_livro, titulo_livro, estoque_livro } = req.body;

    
    let data = {};
    let livro = Livros.findOne({ titulo_livro });
    if (livro) {
      data = { codigo_livro, titulo_livro, estoque_livro};
      livro = await Livros.create(data);
      return res.status(200).json(livro);
    } else {
      return res.status(500).json(livro);
    }
  },
  //R
  async details(req, res) {
    const { _id } = req.params;
    const livro = await Livros.findOne({ _id });
    res.json(livro);
  },
  //U
  async update(req, res) {
    const { _id, codigo_livro, titulo_livro, estoque_livro } = req.body;
    const data = { _id,  codigo_livro, titulo_livro, estoque_livro };
    const livro = await Livros.findByIdAndUpdate({_id}, data, {new:true});
    res.json(livro);
  },
  //D
  async delete(req, res) {
    const { _id } = req.params;
    const livro = await Livros.findByIdAndDelete({_id});
    res.json(livro);
  },

};
