var express = require('express');
var router = express.Router();

//localhost:3000/login/validar
router.post('/validar', function(req, res, next) {
  res.redirect("/admin");
});

module.exports = router;