var mongoose = require('mongoose');

var MongooseUsers = {
	url : 'mongodb://localhost:27017/info',
	connect(){
		mongoose.connect(this.url,{ useNewUrlParser:true },(err)=>{
			if(err){
				console.log('数据库Users连接失败');
				return;
			}
			console.log('数据库Users连接成功');
		})
	}
};

var MongooseMail = {
	url : 'mongodb://localhost:27017/info',
	connect(){
		mongoose.connect(this.url,{ useNewUrlParser:true },(err)=>{
			if(err){
				console.log('数据库Mail连接失败');
				return;
			}
			console.log('数据库Mail连接成功');
		})
	}
};

var Head = {
	baseUrl : "10.120.19.240:3000/uploads/",
}

module.exports = {
	MongooseUsers,
	MongooseMail,
	Head,
}