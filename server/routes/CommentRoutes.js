let express =  require("express");

const router = express.Router();
let {list,create} = require( "../controllers/CommentController");

router.get("/comments", list);
router.post("/comments", create);

module.exports =  router;