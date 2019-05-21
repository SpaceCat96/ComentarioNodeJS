//noticiaController.js
let model = require('../models/noticiaModel');

module.exports = {
	show : function(req,res){
		model.find({},function(err,data){
			if(err){
				console.log(err);
				res.sendStatus(500);
			}else{
				res.json(data);
			}
		});
	},
	detail : function(req,res){
		let val_id = req.params.id;
		model.findOne({_id:val_id},function(err,data){
			if(err){
				console.log(err);
				res.sendStatus(500);
			}else{
				res.json(data);
			}
		});
	},
	create: function(req,res){
		model.findOne({}, {_id:1}, {sort: {_id: -1}, limit: 1},function(err, result){
			if(err){
				console.log(err);
				res.sendStatus(500);
			}else{
				let obj = new model;
				last_id = parseInt(result._id);
				obj._id = (last_id + 1);
				obj.titulo = req.body.titulo;
				obj.descripcion = req.body.descripcion;
				obj.categoria = req.body.categoria;
				obj.fecha = req.body.fecha;
				obj.save(function(err,newData){
					if(err){
						console.log(err);
						res.sendStatus(500);
					}else{
						res.json(newData);
					}
				});
			}
		});
	},
	update: function(req,res){
		let val_id = req.body.id;
		let datos = {
			titulo : req.body.titulo,
			descripcion : req.body.descripcion,
			categoria : req.body.categoria,
			fecha : req.body.fecha
		};
		model.updateOne({_id:val_id},datos,function(err,newData){
			if(err){
				console.log(err);
				res.sendStatus(500);
			}else{
				res.json(newData);
			}
		});
	},
	delete: function(req,res){
		let val_id = req.params.id;
		model.deleteOne({ _id: val_id }, function (err) {
			if (err) return handleError(err);
			res.redirect('/news');
		});
	}
};