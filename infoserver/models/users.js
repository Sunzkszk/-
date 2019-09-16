var mongoose = require('mongoose');
mongoose.set('useCreateIndex',true);
var { Head } = require('../untils/config.js');
var url = require('url');

var UserSchema = new mongoose.Schema({
	username: { type : Object , required : true , index : { unique : true } },//学号
	password : { type : String , required : true },//密码
	name : {  type : String , required : true },//姓名
	grade : {  type : String , required : true },//年级
	category : {  type : String , required : true },//类别
	teacher : {  type : String , required : true },//导师
	department : {  type : String , required : true },//院系
	major : {  type : String , required : true }, //专业
	research : {  type : String , required : true },//研究方向
	politics : {  type : String , required : true },//政治面貌
	marriage : {  type : String , required : true },//婚姻状况
	nation : {  type : String , required : true },//民族
	number : {  type : String , required : true },//身份证号
	address : {  type : String , required : true },//住址
	birth : {  type : String , required : true },//出生日期
	degree : {  type : String , required : true },//学位类型
	date : { type : Date , default : Date.now() },//日期
	hassendEmail : { type : Boolean , default : false },//是否提交过导师/学生选择
	isTeacher : { type : Boolean , default : false },//老师还是学生
	userHead : { type : String , default : url.resolve( Head.baseUrl , 'default.jpg' ) },//头像
	relationship :{ type : Object , default : '未选择' },//师生
});

var UserModel = mongoose.model('users' , UserSchema);
UserModel.createIndexes();

var getTeacher =()=>{
	return UserModel.find({"isTeacher": true},function (error,docs) {
    	if (error){
        	return error;
    	}else{
        	return docs;
    	}
	});
}

var save = (data) => {
	var user = new UserModel(data);
	return user.save()
			.then(()=>{
				return true;
			})
			.catch((res)=>{
				return false;
			});
};

var findLogin = (data)=>{
	return UserModel.findOne(data);
};

var updateUserHead = ( username , userHead ) => {
	return UserModel.update({username} , { $set : { userHead } })
			.then(()=>{
				return true;
			})
			.catch(()=>{
				return false;
			});
};

var updatePassword = (username , password) => {
	return UserModel.update( { username } , { $set : { password } } )
		   .then(()=>{
		   		return true;
		   })
		   .catch(()=>{
		   		return false;
		   });
}

var updateRelationship = (username,relationship) => {
	UserModel.updateOne({ username },{ $set : { relationship } }).then((er)=>{
		console.log(er);
	})
	.catch((err)=>{
		console.log(err);
	});
		for(var j=0;j<relationship.length;j++){
			var rel = relationship[j];
			var wherestr1 = { 'username' : rel };
			var updatestr1 = { 'relationship' : username };
			return UserModel.updateOne(wherestr1,updatestr1).then((er)=>{
				return true;
			}).catch((err)=>{
				console.log(err);
			});
		}
};


var find = (username) => {
	return UserModel.findOne({'username':username}).then((er)=>{
		console.log('er');
		console.log(er);
		return er;
	});
};


var update = (wherestr,updatestr) => {
	return UserModel.updateOne(wherestr,updatestr).then((er)=>{
		return er;
	});
};

module.exports = {
	save,
	findLogin,
	updatePassword,
	updateUserHead,
	updateRelationship,
	getTeacher,
	find,
	update,
};