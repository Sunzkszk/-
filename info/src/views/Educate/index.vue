<template>
	<div id="main">
		<div id="content">
			<div id="body">
				<div class="body_up">
					<i class="iconfont icon-fanhui" @click="handleToBack"></i>
					<h1>{{title}}</h1>
				</div>
				<div class="body_bottom">
					<div v-if="this.title==='个人课表查询'">
						
					</div>
					<div v-else-if="this.title==='个人成绩查询'">
						
					</div>
					<div v-else-if="this.title==='学业师生互选'" class="teacherchoose">
						<p>注：提交后无法修改，无法重复提交，请确认无误后再进行提交。</p>
						<TeacherChoose />
					</div>
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
import TeacherChoose from '@/views/TeacherChoose';
import axios from 'axios';
	export default{
		name : 'Public',
		components : {
			Header,
			Footer,
			TabBarLeft,
			TabBarRight,
			TeacherChoose,
		},
		data(){
			return{
				title:'',
				
			}
		},
		created(){
			this.title = this.$route.params.title;
		},
		methods : {
			handleToBack(){
				this.$router.push('/home');
			},
		},
		watch : {
			'$route'(to,from){
				this.title = this.$route.params.title;
			}
		}
	}
</script>

<style scoped>
	#body .body_bottom .teacherchoose p{
		color:#808080;
		margin-left:2%;
		text-align: center;
	}
	#body .body_bottom div{
		height: 100%;
	}
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