//noticiaModel.js
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let modelSchema = new Schema({
	_id : { type: Number , required: true },
	titulo : { type: String , required: true },
	descripcion : { type: String , required: true },
	categoria : { type: String , required: true },
	fecha : { type: String , required: true },
	comentarios: [{
		autor : { type: String , required: true },
		mensaje : { type: String , required: true },
		fecha : { type: String , required: true }
	}]
});
let model = mongoose.model('noticias',modelSchema,'noticias');
module.exports = model;