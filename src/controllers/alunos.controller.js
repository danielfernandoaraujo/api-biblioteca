const Alunos = require("../models/aluno.model");

module.exports = {
  async index(req, res) {
    const aluno = await Alunos.find({});
    res.status(200).json(aluno);
  },
  //C
  async create(req, res) {
    const { nome, turma, email, telefone } = req.body;

    let data = {};
    let aluno = Alunos.findOne({ email });
    if (aluno) {
      data = { nome, turma, email, telefone };
      aluno = await Alunos.create(data);
      return res.status(200).json(aluno);
    } else {
      return res.status(500).json(aluno);
    }
  },
  //R
  async details(req, res) {
    const { _id } = req.params;
    const aluno = await Alunos.findOne({ _id });
    res.json(aluno);
  },
  //U
  async update(req, res) {
    const { _id, nome, turma, email, telefone } = req.body;
    const data = { _id, nome, turma, email, telefone };
    const aluno = await Alunos.findByIdAndUpdate({_id}, data, {new:true});
    res.json(aluno);
  },
  //D
  async delete(req, res) {
    const { _id } = req.params;
    const aluno = await Alunos.findByIdAndDelete({_id});
    res.json(aluno);
  },

};
