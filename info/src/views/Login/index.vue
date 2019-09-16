<template>
	<div id="login">
		<header class="login_header">
			<img src="@/assets/logo_01.png" class="logo">
			<div class="change">
				<span>繁體版</span>
				<span>English</span>
				<span>帮助</span>
			</div>
		</header>
		<div class="login_body" v-if="temp">
			<div class="login_window" @keyup.13 ="handleToLogin">
				<i class="iconfont icon-denglu">&nbsp&nbsp用户登录</i>
				<div class="text">
					用户名&nbsp&nbsp<input v-model="username" type="text" placeholder="请输入用户名">
				</div>
				<div class="password">
					密&nbsp&nbsp&nbsp码&nbsp&nbsp<input v-model="password" type="password" placeholder="请输入密码">
				</div>
				<div class="verify">
					验证码&nbsp&nbsp<input type="text" v-model="verifyImg" placeholder="请输入验证码"> <img @click="VerifyImg" src="/api2/users/verifyImg">
				</div>
				<div class="submit">
					<button @click="handleToLogin">登&nbsp&nbsp录</button>
					<p @click="Back" style="cursor:pointer">忘记密码？</p>
				</div>
				<span>注:账号为学号或教工号，初始密码为身份证后6位</span>
			</div>
		</div>
		<div class="login_body" v-else>
			<div class="login_window">
				<i class="iconfont icon-denglu">&nbsp&nbsp找回密码</i>
				<div class="text">
					学&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp号&nbsp&nbsp<input v-model="username" type="text" placeholder="请输入学号">
				</div>
				<div class="password">
					身份证号&nbsp&nbsp<input v-model="number" type="text" placeholder="请输入身份证号">
				</div>
				<div class="password">
					新&nbsp&nbsp密&nbsp&nbsp码&nbsp&nbsp<input v-model="password" type="password" placeholder="请输入新密码">
				</div>
				<div class="verify">
					验证码 <input type="text" v-model="verifyImg" placeholder="请输入验证码" @keyup.13 ="handleToLogin"> <img @click="VerifyImg" src="/api2/users/verifyImg">
				</div>
				<div class="submit">
					<button @click="findPassword">确&nbsp&nbsp认</button>
					<p @click="Back" style="cursor:pointer">返回去登录</p>
				</div>
				<span>注:学号与身份证号应匹配</span>
			</div>
		</div>
		<footer class="login_footer">
			<span>地址：北京市昌平区府学路8号；邮编：102249</span>
			<span>管理员信箱：szkszk77@163.com</span>
			<a href="http://www.cup.edu.cn" target="_blank"><i class="iconfont icon-zhandianwangzhanhulianwangie">官方网站</i></a>
			<a href="https://weibo.com/CUPBJ" target="_blank"><i class="iconfont icon-weibo">官方微博</i></a>
		</footer>
	</div>
</template>

<script>
	import { messageBox } from '@/components/JS';
	export default{
		name : 'Login',
		data(){
			return{
				username:'',
				number:'',
				password:'',
				temp : true,
				verifyImg : '',
			}
		},
		methods : {
			handleToLogin(){			
				this.axios.post('/api2/users/login',{
					username : this.username,
					password : this.password,
					verifyImg : this.verifyImg,
				}).then((res) => {
					var status = res.data.status;
					var This = this;
					if(status === 0){
						messageBox({
							title : '登录',
							content : '登录成功',
							ok : '确定',
							handleOk(){
        						This.$router.push('/home');
							}
						});
					}
					else if(status===-3){
						messageBox({
							title : '登录',
							content : '验证码错误',
							ok : '确定',
							handleOk(){
								This.$router.back();
							}
						});
					}
					else{
						messageBox({
							title : '登录',
							content : '用户名或密码错误',
							ok : '确定',
							handleOk(){
								This.$router.back();
							}
						});
					}
				});
			},
			findPassword(){
				this.axios.post('/api2/users/findPassword',{
                	username: this.username,
                	number : this.number,
                	password : this.password,
                	verifyImg : this.verifyImg,
            	}).then((res)=>{
                	var status = res.data.status;
                	var This = this;
                	if(status===0){
                    	messageBox({
                        	title : '修改',
                        	content : '修改密码成功',
                        	ok : '确定',
                        	handleOk(){
                        	    this.temp = ! this.temp;
                        	}
                    	});
                	}
                	else{
                     	messageBox({
                        	title : '修改',
                        	content : '修改密码失败',
                        	ok : '确定',
                        	handleOk(){
								This.$router.back();
							}
                    	});
                	}
            	});
            	
			},
			Back(){
				this.temp = ! this.temp;
			},
			VerifyImg(ev){
				ev.target.src = '/api2/users/verifyImg?'+Math.random();
			}
		},
	}
</script>

<style scoped>
	.login_body .login_window span{
		margin: 10px 30px 30px 30px;
		color:#808080;
	}
	.login_body .login_window i{
		font-size: 25px;
		margin: 30px;
		color: blue;
	}
	.login_body .login_window input{
		height: 30px;
		width: 60%;
	}
	.login_body .login_window .text{
		margin: 20px 30px 0 30px;
		font-size: 20px;
		font-weight: bold;
	}
	.login_body .login_window .password{
		margin: 20px 30px 0 30px;
		font-size: 20px;
		font-weight: bold;
	}
	.login_body .login_window .verify{
		margin: 20px 30px 0 30px;
		font-size: 20px;
		font-weight: bold;
	}
	.login_body .login_window button{
		margin: 10px 30px 20px 30px;
		height: 40px;
		width: 100px;
		font-size: 20px;
		font-weight: bold;
	}
	.login_body .login_window .submit{
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.login_body .login_window{
		background-color: white;
		margin-right: 5%;
		border: 2px solid #eee;
		border-radius: 10px;
		display: flex;
		flex-direction:column;
		justify-content: space-around;
		height: 95%;
	}
	#login .login_header img{
		width: 30%;
		height: 100%;
	}
	#login .login_header .change span{
		margin: 0 10px 0 10px;
	}
	#login .login_header .change{
		font-size:15px;
		color:#808080;
		cursor:pointer;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 20%;
	}

	#login .login_footer a,span{
		color: #808080;
	}
	#login .login_body{
		background-image: url(body_back.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 76%;
		width: 100%;
		margin-top: 1%;
		margin-bottom: 1%;
	}
	#login .login_header{
		display: flex;
		background-color:#AFEEEE;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		height:10%;
	}
	#login .login_footer{
		background-color:#AFEEEE;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height:10%;
	}
	#login{
		height: 100%;
		width: 100%;
	}
</style>