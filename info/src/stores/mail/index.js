const state = {
	result:'',
};

const actions = {

};

const mutations = {
	USER_NAME(state,payload){
		state.result = payload.result;
	}
};

export default {
	namespaced : true,
	state,
	actions,
	mutations,
}