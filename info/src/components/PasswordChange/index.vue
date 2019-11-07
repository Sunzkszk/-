<template>
	<div id="content">
		<div class="passwordchange">
			<div class="up">
				<p>学号：<input type="text" v-model="username" placeholder="请输入学号"></p>
				<p>身份证号：<input type="text" v-model="number" placeholder="请输入身份证号"></p>
				<p>新密码：<input type="password" v-model="password" placeholder="请输入新密码"></p>
				<p>重复新密码：<input type="password" v-model="repeat" placeholder="请输入新密码"></p>	
			</div>
			<div class="down">
				<p><button @click="handleToPassword">确认修改</button></p>
			</div>
		</div>
	</div>
</template>

<script>
import { messageBox } from '@/components/JS';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TabBarLeft from '@/components/TabBar_left';
import TabBarRight from '@/components/TabBar_right';
import BasisInfo from '@/components/BasisInfo';
import InfoChange from '@/components/InfoChange';
	export default{
		name : 'Public',
		data(){
			return{
				username:'',
				number:'',
				password:'',
				repeat:'',
			}
		},
		components : {
			Header,
			Footer,
			TabBarLeft,
			TabBarRight,
			BasisInfo,
			InfoChange,
		},
		methods : {
			 handleToPassword(){
				if(this.password == this.repeat){
					this.axios.post('/api2/users/findPassword',{
						username: this.username,
						number : this.number,
						password : this.password,
					}).then((res)=>{
						var status = res.data.status;
						var This = this;
						console.log(status);
						if(status===0){
					    	messageBox({
					        	title : '修改',
					        	content : '修改密码成功',
					        	ok : '确定',
					        	handleOk(){
					        	   	This.$router.push('/login');
					        	}
					    	});
						}
						else{
					     	messageBox({
					        	title : '修改',
					        	content : '修改密码失败',
					        	ok : '确定'
					    	});
						}
					});
				}
            	else{
					messageBox({
						title : '错误',
						content : '两次密码不一致',
						ok : '确定'
					});
				}
        	}
		}
	}
</script>

<style scoped>
	#content{
		position: relative;
		height: 100%;
		width: 100%;
	}
	.passwordchange{
		height: 70%;
		width: 70%;
		margin: auto;
		background-color: #AFEEEE;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.up{
		height: 80%;
	}
	.down{
		height: 20%;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.down button{
		font-size: 20px;
	}
	.up{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		font-size: 1.2rem;
	}
</style>