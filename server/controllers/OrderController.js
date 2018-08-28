const OrderModel = require("../models/OrderModel");

module.exports.list =  function list(request, response) {
    OrderModel.find({}).exec()
    .then(orders => {
        return response.json(orders);
    });
   }

//already had 5 in the DB
module.exports.create =  function create(request, response) {
    let neworder = new OrderModel(request.body);
    neworder.save()
    .then(neworder => {
      return response.json(neworder);
    });
}

   
   