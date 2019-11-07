<template>
	<header class="header">
		<div class="header_message">
			<img src="@/assets/logo_01.png" class="logo">
			<h2>信息管理系统</h2>
		</div>
		<div class="header_change">
			<i class="iconfont icon-home" @click="handleToHome">首页</i>
			<i class="iconfont icon-zhuxiao" @click="handleToLogout">注销</i>
			<i class="iconfont icon-xiugaimima" @click="handleTofindPassword">修改密码</i>
		</div>
	</header>
</template>

<script>
	export default{
		name : 'Header',
		methods : {
			handleToHome(){
				this.$router.push('/home');
			},
			handleToLogout(){
            	this.axios.get('/api2/users/logout').then((res)=>{
                	var status = res.data.status;
                	if(status === 0){
                    	localStorage.removeItem('name');
                    	this.$store.commit('user/USER_NAME',{ 
                    		username:'',
							name:'',
							grade:'',
							category:'',
							teacher:'',
							department:'',
							major:'',
							research:'',
							politics:'',
							number:'',
							isTeacher : false,
							userHead : '',
							marriage : '',
							nation : '',
							number : '',
							address : '',
							birth : '',
							degree : '',
                    	});
                    	this.$router.push('/login');
                	}
            	});
        	},
        	handleTofindPassword(){
        		this.$router.push('/home/personinfo/登录密码修改');
        	}
		}
	}
</script>

<style scoped>
	.header .header_change i{
		color:#808080;
		cursor: pointer;
	}
	.header .header_change{
		height: 100%;
		width: 20%;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.header .header_message h2{
		color: 	#4169E1;
		margin-left: 4%;
		padding-top: 10px;
		padding-bottom: 10px;
		width: 50%;
	}
	.header .header_message img{
		width: 50%;
	}
	.header .header_message{
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 50%;
	}
	.header{
		width: 100%;
		background-color:#AFEEEE;
		margin-bottom: 5px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
	}
</style>