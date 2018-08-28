const TaskModel = require("../models/TaskModel");

module.exports.list =  function list(request, response) {
    TaskModel.find({}).exec()
    .then(tasks => {
        return response.json(tasks);
    });
   }

//already had 5 in the DB
module.exports.create =  function create(request, response) {
    let newtask = new TaskModel(request.body);
    newtask.save()
    .then(newtask => {
      return response.json(newtask);
    });
}

   
   