var mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);

var MailSchema = new mongoose.Schema({
	fromUser : { type : String , required : true },//发信人学号
	fromName : { type : String , required : true },//发信人姓名
	fromNumber : { type : String , required : true },//发信人身份证号
	toUser : { type : String , required : true },//收信人
	date : { type : Date , default : Date.now() },//时间
	times : { type : Number , default : 0 },//次数
	stage : { type : String , default : "unread" },//状态
});

var MailModel = mongoose.model('mail',MailSchema);
MailModel.createIndexes();

var save = (data) => {
	var mail = new MailModel(data);
	mail.times++;
	return mail.save()
			.then(()=>{
				return true;
			})
			.catch((res)=>{
				console.log('res');
				console.log(res);
				return false;
			});
};

var find = (data) => {
	var mail = new MailModel(data);
	return MailModel.find({toUser : mail.toUser},function(err,res){
		return res;
	})
};

var remove = (wherestr) => {
	return MailModel.remove(wherestr,function(err,res){
		if(err){
			console.log("Error"+ err);
		}
		else{
			console.log("Res"+ res);
		}
	});
};

module.exports = {
	save,
	find,
	remove,
	MailModel,
};











