var express = require('express');
var router = express.Router();
var controller  = require('../controllers/noticiaController');
let model = require('../models/noticiaModel');
//localhost:3000/news/
router.get('/', function(req, res) {
  model.find({}).sort({fecha:-1}).exec(function(err,data){
			if(err){
				console.log(err);
				res.sendStatus(500);
			}else{
				//res.render('user/index',{lista:data});
				res.render("user/index",{lista:data},function(err,html){
				if(err) throw err;
				res.render("user/layout",{
					section: html,
					tituloSeccion: "Lista de Noticias"
				 	});
				});
			}
		});


  //res.render("noticias",function(err,html){
  //		res.render("layouts/layout",{
  //			tituloSeccion: "Noticias",
  //			section: html
  //		});
  //});
});

//localhost:3000/news/listar
router.get('/listar', function(req, res) {
  controller.show(req,res);
});
//localhost:3000/news/detalle/3
router.get('/detalle/:id', function(req, res, next) {
	let val_id = req.params.id;
	model.findOne({_id:val_id},function(err,data){
		if(err){
			console.log(err);
			res.sendStatus(500);
		}else{

			res.render("user/view",{list:data},function(err,html){
				if(err) throw err;
				res.render("user/layout",{
					section: html,
					tituloSeccion: "Detalle de Noticias"
				 	});
				});

			//res.json(data);
		}
	});

});

router.post('/addcomment', function(req, res,next) {
	console.log(req.body);
	let val_id = req.body.id;
	let fecha = new Date().toLocaleString();;
	data = {
		'autor': req.body.txtAutor,
		'mensaje': req.body.txtMensaje,
		'fecha': fecha,
		}
  	model.findOneAndUpdate(
   { _id:val_id}, 
   { $push: { comentarios: data  } },
   function (err, success) {	
        if (err) {
            console.log(err);
			res.sendStatus(500);
        } else {
            res.redirect('../user/detalle/'+val_id);
        }
    });
});

module.exports = router;