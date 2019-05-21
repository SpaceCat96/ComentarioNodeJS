//routes/admin.js
var express = require('express');
var router = express.Router();

//localhost:3000/admin
router.get('/', function(req, res, next) {
  datos = {
  	nombre : "Juan",
  	apellido : "Lopez"
  };
  res.render("admin/index",datos,function(err,html){
  	if (err) throw err;
    res.render('layouts/layout',{
      seccion: html,
      tituloSeccion : "Dashboard"
    });
  });
});

module.exports = router;