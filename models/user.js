var mongoose=require('../config/mongoose');
Schema=mongoose.Schema;
var schema=new Schema({
	email:{
		type:String,
		required:true,
		unique:true
	},
	password:{
		type:String,
		required:true
	},
	status:{
	type:String
	}
	
});
exports.User=mongoose.model('users',schema);
