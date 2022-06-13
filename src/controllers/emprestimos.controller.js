const Emprestimos = require("../models/emprestimos.model");

module.exports = {
  async index(req, res) {
    const emprestimo = await Emprestimos.find({});
    res.status(200).json(emprestimo);
  },
  //C
  async create(req, res) {
    const { nome_aluno, nome_livro, data_prazo, data_atual } = req.body;

    
    let data = {};
    let emprestimo = Emprestimos.findOne({ nome_aluno });
    if (emprestimo) {
      data = { nome_aluno, nome_livro, data_prazo, data_atual};
      emprestimo = await Emprestimos.create(data);
      return res.status(200).json(emprestimo);
    } else {
      return res.status(500).json(emprestimo);
    }
  },
  //R
  async details(req, res) {
    const { _id } = req.params;
    const emprestimo = await Emprestimos.findOne({ _id });
    res.json(emprestimo);
  },
  //U
  async update(req, res) {
    const { _id, nome_aluno, nome_livro, data_prazo, data_atual } = req.body;
    const data = { _id,  nome_aluno, nome_livro, data_prazo, data_atual };
    const emprestimo = await Emprestimos.findByIdAndUpdate({_id}, data, {new:true});
    res.json(emprestimo);
  },
  //D
  async delete(req, res) {
    const { _id } = req.params;
    const emprestimo = await Emprestimos.findByIdAndDelete({_id});
    res.json(emprestimo);
  },

};
