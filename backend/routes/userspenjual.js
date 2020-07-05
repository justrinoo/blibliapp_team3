var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/v1/api/blibli/register  ', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
