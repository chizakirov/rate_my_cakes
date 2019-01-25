const model = require('./model.js');

module.exports = {

  allCakes: (req, res) => {
    model.Cake.find({})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getCake: (req, res) => {
    const id = req.params.id;
    model.Cake.findById(id)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  addCake: (req, res) => {
  
    model.Cake.create(req.body)
      .then(result => res.json(result)) 
      .catch(err => res.json(err));
  },

  updateCake: (req, res) => {

    const new_comment = model.Comment.create({rating: req.body.rating, comment: req.body.comment})
      .then(new_comment => res.json (new_comment))
      .catch(err => res.json(err));
  
    model.Cake.findOneAndUpdate({_id: req.params.id}, {$push: {comments: new_comment}})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  deleteCake: (req, res) => {

    model.Cake.findByIdAndDelete({_id: req.params.id})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
}
