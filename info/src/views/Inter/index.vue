<template>
	<div id="main">
		<div id="content">
			<div id="body">
				<div class="body_up">
					<i class="iconfont icon-fanhui" @click="handleToBack"></i>
					<h1>{{title}}</h1>
				</div>
				<div class="body_bottom">
					<div v-if="this.title==='教学评价'">
						
					</div>
					<div v-else-if="this.title==='师生互动'">
						
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
	export default{
		name : 'Public',
		components : {
			Header,
			Footer,
			TabBarLeft,
			TabBarRight,
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
		}
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