var express = require('express');
var router = express.Router();
var controller  = require('../controllers/noticiaController');

//localhost:3000/news/
router.get('/', function(req, res) {
  res.render("noticias",function(err,html){
  		res.render("layouts/layout",{
  			tituloSeccion: "Noticias",
  			section: html
  		});
  });
});

//localhost:3000/news/listar
router.get('/listar', function(req, res) {
  controller.show(req,res);
});
//localhost:3000/news/detalle/3
router.get('/detalle/:id', function(req, res, next) {
  controller.detail(req,res);
});
//localhost:3000/news/crear
router.post('/crear', function(req, res, next) {
  controller.create(req,res);
});
//localhost:3000/news/actualizar
router.post('/actualizar', function(req, res, next) {
  controller.update(req,res);
});
//localhost:3000/news/eliminar
router.get('/eliminar/:id', function(req, res, next) {
  controller.delete(req,res);
});

module.exports = router;