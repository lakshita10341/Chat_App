
const {addMsg, getAllMsg} = require("../controllers/msgControllers");


const router = require('express').Router();

router.post("/addMsg/", addMsg);

router.post("/getAllMsg/", getAllMsg);

module.exports=router;