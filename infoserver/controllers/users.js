
var UserModel = require('../models/users.js');

var { createVerify } = require('../untils/base.js');

var fs = require('fs');

var { Head } = require('../untils/config.js');

var url = require('url');

var login = async (req,res,next)=>{
	var { username , password , name , grade , category , teacher , department , major , research , politics , number , verifyImg , userHead , relationship } = req.body;
	var result = await UserModel.findLogin({
		username,
		password,
	});
	if(result){
		if(verifyImg !== req.session.verifyImg){
			res.send({
				msg : '验证码输入不正确',
				status : -3,
			});
			return;
		}	
		else{
			req.session.username = username;
			req.session.password = password;
			req.session.name = result.name;
			req.session.grade = result.grade;
			req.session.category = result.category;
			req.session.teacher = result.teacher;
			req.session.department = result.department;
			req.session.teacher = result.teacher;
			req.session.major = result.major;
			req.session.research = result.research;
			req.session.politics = result.politics;
			req.session.number = result.number;
			req.session.isTeacher = result.isTeacher;
			req.session.userHead = result.userHead;
			req.session.relationship = result.relationship;
			req.session.hassendEmail = result.hassendEmail;
			req.session.marriage = result.marriage;
			req.session.nation = result.nation;
			req.session.number = result.number;
			req.session.address = result.address;
			req.session.birth = result.birth;
			req.session.degree = result.degree;
			res.send({
				msg : '登录成功',
				status : 0
			});
		}
		
	}
	else{
		res.send({
			msg : '登录失败',
			status : -1
		})
	}
	
};

var register = async (req,res,next) => {
	var { username,password,name,grade,category,teacher,department,major,research,politics,number,marriage,nation,number,address,birth,degree} = req.body;
	try{
		var result = await UserModel.save({
			username,
			password,
			name,
			grade,
			category,
			teacher,
			department,
			major,
			research,
			politics,
			number,
			marriage,
			nation,
			number,
			address,
			birth,
			degree,
		});
	}
	catch(err){
		console.log(err.message);
	}
	console.log(result);
	if(result){
		res.send({
			msg : '注册成功',
			status : 0,
		});
	}
	else{
		res.send({
			msg : '注册失败',
			status : -2,
		});
	}
};	

var logout = async (req,res,next)=>{
	req.session.username = '';
	res.send({
		msg:'退出成功',
		status : 0
	});
};

var getUser = async (req,res,next)=>{
	if(req.session.username){
		var hk='未选择';
		if(req.session.relationship!='未选择'){
			var result = await UserModel.find(req.session.relationship);
			hk = result.name;
		}
		res.send({
			msg:'获取用户信息成功',
			status : 0,
			data : {
				username : req.session.username,//学号
				password : req.session.password,//密码
				name : req.session.name,//姓名
				grade : req.session.grade,//年级
				category : req.session.category,//类别
				department : req.session.department,//院系
				teacher : hk,//老师
				major : req.session.major,//专业
				research : req.session.research,//研究方向
				politics : req.session.politics,//政治面貌
				number : req.session.number,//身份证号
				isTeacher : req.session.isTeacher,//身份
				userHead : req.session.userHead,
				relationship : req.session.relationship,
				hassendEmail : req.session.hassendEmail,
				marriage : req.session.marriage,
				nation : req.session.nation,
				number : req.session.number,
				address : req.session.address,
				birth : req.session.birth,
				degree : req.session.degree,
			}
		});
		var wherestr = { 'username' : req.session.username };
		var updatestr = { 'teacher' : hk };
		var final = await UserModel.update(wherestr,updatestr).then(()=>{

		}).catch((error)=>{
			
		});
	}
	else{
		res.send({
			msg : '获取用户信息失败',
			status : -1,
		});
	}
};

var emailstatusChange = async(req,res,next) => {
	var { hassendEmail } = req.body;
	var wherestr = { 'username' : req.session.username };
	var updatestr = { 'hassendEmail' : req.body.hassendEmail };
	var final = await UserModel.update(wherestr,updatestr).then(()=>{

	}).catch((error)=>{
		
	});
};


var relationChange = async (req,res,next) => {
	var { relationship } = req.body;
	var username = req.session.username;
	var relationship = req.body.relationship;
	var results = await UserModel.updateRelationship(username,relationship);
	if(results){
		res.send({
			msg : '提交成功',
			status : 0,
		});
	}
	else{
		res.send({
			msg : '提交失败',
			status : -1,
		});
	}
};


var findPassword = async (req,res,next)=>{
	var { username, number , password } = req.body;
	if( username === req.session.username && number === req.session.number ){
		var result = await UserModel.updatePassword(username , password );
		if(result){
			res.send({
				msg : '修改密码成功',
				status : 0,
			})
		}
		else{
			res.send({
				msg : '修改密码失败',
				status : -1,
			})
		}
	}
	else{
		res.send({
			msg : '信息不匹配',
			status : -2,
		})
	}
	
};

var verifyImg = async(req,res,next) => {
	var result = await createVerify(req,res);
	if(result){
		res.send(result);
	}
};

var uploadUserHead = async(req,res,next) => {
	await fs.rename( 'public/uploads/' + req.file.filename , 'public/uploads/' + req.session.username + '.jpg');
	var result = await UserModel.updateUserHead(req.session.username,url.resolve(Head.baseUrl , req.session.username + '.jpg' ));
	if(result){
		res.send({
			msg : '头像修改成功',
			status : 0,
			data : {
				userHead : url.resolve(Head.baseUrl , req.session.username + '.jpg' )
			}
		});
	}
	else{
		res.send({
			msg : '头像修改失败',
			status : -1,
		})
	}

};

var getTeacher = async(req,res,next) => {
	var result = await UserModel.getTeacher();
	if(result){
		res.send({
			msg:'教师列表传输成功',
			status:0,
			result,
		})
	}
	else{
		res.send({
			msg:'教师列表传输失败',
			status:-1,
			result,
		})
	}
};

//输入学号/工号，查询姓名
var find = async(req,res,next) => {
	var { username } = req.body;
	var result = await UserModel.find(username);
	res.send({
		msg:'heihei',
		status:0,
		result,
	})
}

var hassendEmail = async(req,res,next) => {
	var { username } = req.body;
	var result = await UserModel.find(username);
	res.send({
		status:0,
		result,
	})
};

var infoChange = async(req,res,next) => {
	var { username , research} = req.body
	var wherestr = { 'username' : req.body.username };
	var updatestr = { 'research' : req.body.research,
					'politics' : req.body.politics,
					'marriage' : req.body.marriage,
					'nation' : req.body.nation,
					'number' : req.body.number, 
					'address' : req.body.address, 
					'birth' : req.body.birth,
	};
	var result = await UserModel.update(wherestr,updatestr).then(()=>{
		res.send({
			msg:'修改成功',
			status:0,
		})
	}).catch((error)=>{
		res.send({
			msg:'修改失败',
			status:-1,
		})
	});
};



module.exports = {
	register,
	login,
	logout,
	getUser,
	findPassword,
	relationChange,
	verifyImg,
	uploadUserHead,
	getTeacher,
	find,
	emailstatusChange,
	hassendEmail,
	infoChange,
}