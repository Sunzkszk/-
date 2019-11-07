<template>
	<div id="main">
		<div id="content">
			<div id="body">
				<div class="body_up">
					<i class="iconfont icon-fanhui" @click="handleToBack"></i>
					<h1 v-model="title">{{title}}</h1>
				</div>
				<div class="body_bottom">
						<BasisInfo v-if="this.title=='个人基本信息'" />
						<InfoChange v-else-if="this.title=='个人信息修改'" />
						<PasswordChange v-else-if="this.title=='登录密码修改'" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TabBarLeft from '@/components/TabBar_left';
import TabBarRight from '@/components/TabBar_right';
import BasisInfo from '@/components/BasisInfo';
import InfoChange from '@/components/InfoChange';
import PasswordChange from '@/components/PasswordChange';
	export default{
		name : 'PersonInfo',
		components : {
			Header,
			Footer,
			TabBarLeft,
			TabBarRight,
			BasisInfo,
			InfoChange,
			PasswordChange,
		},
		data(){
			return{
				title:''
			}
		},
		created(){
			this.title = this.$route.params.title;
		},
		methods : {
			handleToBack(){
				this.$router.push('/home');
			}
		},
		watch : {
			'$route'(to,from){
				this.title = this.$route.params.title;
			}
		},
	}
</script>

<style scoped>
	#body .body_bottom{
		width: 100%;
		height: 90%;
	}
	#body .body_up h1{
		margin-top: 2%;
		font-size: 1rem;
		text-align: center;
	}
	#body .body_up{
		width: 100%;
		height: 10%;
		border-bottom: 1px solid black;
		position: relative;
	}
	#body{
		width:100%;
	}
	i{ 
		font-size: 2rem;
		position: absolute;
		top:13%;
	}	
</style>