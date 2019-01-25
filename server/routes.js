const controller = require('./controller.js');

module.exports = function(app){
  app
    .get('/cakes', controller.allCakes)
    .get('/cakes/:id', controller.getCake)
    .post('/cakes', controller.addCake)
    .patch('/cakes/:id', controller.updateCake)
    .delete('/cakes/:id', controller.deleteCake)
}