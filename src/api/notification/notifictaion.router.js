var express = require("express");
var router = express.Router();
const userauth = require("../middleware/userauth");
const { getNotification } = require("./notification.controller");

router.get("/getnotification", userauth, getNotification);



module.exports = router;
