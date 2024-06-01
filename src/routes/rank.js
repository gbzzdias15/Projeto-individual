var express = require("express");
var router = express.Router();

var rankController = require("../controllers/rankController");

router.get("/ranquear", function (req, res) {
    
    rankController.ranquear(req, res);
});

module.exports = router;