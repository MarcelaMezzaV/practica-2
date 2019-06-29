var express = require('express');
var router = express.Router();

var USER = require('../database/mascota.js');

var express = require('express');
var router = express.Router();
router.post('/mascota', async(req, res) => {
var params = req.body;
var users = new USER(params);
var result = await users.save();
res.status(200).json(result);
});
module.exports = router;

router.get("/mascota", (req, res) => {
    USER.find().exec((err,docs)=>{
      res.status(200).json(docs);
    });
});


router.patch("/mascota", (req, res) => {
  if (req.query.id == null) {
    res.status(300).json({
      msn: "Error no existe id"
    });
        return;
  }
  var id = req.query.id;
  var params = req.body;
  USER.findOneAndUpdate({_id: id}, params, (err, docs) => {
    res.status(200).json(docs);
  });
});


router.delete("/mascota", async(req, res) => {
  if (req.query.id == null) {
    res.status(300).json({
        msn: "Error no existe id"
    });
    return;
  }
var r = await USER.remove({_id: req.query.id});
  res.status(300).json(r);
});


