const state = {
	username:'',
	name:'',
	grade:'',
	category:'',
	department:'',
	teacher:'',
	major:'',
	research:'',
	politics:'',
	number:'',
	isTeacher : false,
	userHead : '',
	relationship : '',
	marriage : '',
	nation : '',
	number : '',
	address : '',
	birth : '',
	degree : '',
};

const actions = {

};

const mutations = {
	USER_NAME(state,payload){
		state.username = payload.username;
		state.name = payload.name;
		state.grade = payload.grade;
		state.category = payload.category;
		state.department = payload.department;
		state.teacher = payload.teacher;
		state.major = payload.major;
		state.research = payload.research;
		state.politics = payload.politics;
		state.number = payload.number;
		state.isTeacher = payload.isTeacher;
		state.userHead = payload.userHead;
		state.relationship = payload.relationship;
		state.marriage = payload.marriage;
		state.nation = payload.nation;
		state.number = payload.number;
		state.address = payload.address;
		state.birth = payload.birth;
		state.degree = payload.degree;
	}
};

export default {
	namespaced : true,
	state,
	actions,
	mutations,
}