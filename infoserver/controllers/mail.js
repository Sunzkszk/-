var MailModel = require('../models/mail.js');

var sendEmail = async (req,res,next)=> {
	var { fromUser , fromName , fromNumber , toUser } = req.body;
	console.log(req.body);
	var result = await MailModel.save({
		fromUser : req.body.fromUser, 
		fromName : req.body.fromName,
		fromNumber : req.body.fromNumber,
		toUser : req.body.toUser,
	})
	console.log('result');
	console.log(result);
	if(result){
		res.send({
			msg : '成功',
			status : 0,
		});
	}
	else{
		res.send({
			msg : '失败',
			status : -1,
		});
	}
};

var findEmail =  async (req,res,next) => {
	var { toUser } = req.body.toUser;
	var result =  await MailModel.find({
		toUser : req.body.toUser
	})
	if(result!==''){
		res.send({
			msg : '成功',
			status : 0,
			result,
		});
	}
	else{
		res.send({
			msg : '失败',
			status : -1,
			result,
		});
	}
};

var deleteEmail = async (req,res,next) => {
	var { username } = req.body;
	var wherestr = { 'fromUser' : req.body.username };
	var result =  await MailModel.remove(wherestr);
};


module.exports = {
	sendEmail,
	findEmail,
	deleteEmail,
}