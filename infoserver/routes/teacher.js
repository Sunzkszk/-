var express = require('express');
var teacherController = require('../controllers/teacher.js');
var router = express.Router();

/* GET users listing. */

router.use((req,res,next) => {

	if(req.session.username && req.session.isTeacher){
		next();
	}
	else{
		res.send({
			msg:'没有管理权限',
			status:-1,
		});
	}


});

router.get('/', teacherController.index);

module.exports = router;
