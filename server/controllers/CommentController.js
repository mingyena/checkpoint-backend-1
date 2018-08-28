const CommentModel = require("../models/CommentModel");

module.exports.list =  function list(request, response) {
    CommentModel.find({}).exec()
    .then(comments => {
        return response.json(comments);
    });
   }

//already had 5 in the DB
module.exports.create =  function create(request, response) {
    let newcomment = new CommentModel(request.body);
    newcomment.save()
    .then(newcomment => {
      return response.json(newcomment);
    });
}

   
   