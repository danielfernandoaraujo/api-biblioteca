const Turma = require("../models/turma.model");

module.exports = {
  async index(req, res) {
    const turma = await Turma.find({});
    res.status(200).json(turma);
  },
  //C
  async create(req, res) {
    const { turma_aluno } = req.body;

    
    let data = {};
    let turma = Turma.findOne({ turma_aluno });
    if (turma) {
      data = { turma_aluno };
      turma = await Turma.create(data);
      return res.status(200).json(turma);
    } else {
      return res.status(500).json(turma);
    }
  },
  //R
  async details(req, res) {
    const { _id } = req.params;
    const turma = await Turma.findOne({ _id });
    res.json(turma);
  },
  //U
  async update(req, res) {
    const { _id, turma_aluno } = req.body;
    const data = { _id,  turma_aluno };
    const turma = await Turma.findByIdAndUpdate({_id}, data, {new:true});
    res.json(turma);
  },
  //D
  async delete(req, res) {
    const { _id } = req.params;
    const turma = await Turma.findByIdAndDelete({_id});
    res.json(turma);
  },

};
