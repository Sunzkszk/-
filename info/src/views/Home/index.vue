<template>
	<div id="main">
		<Header />	
		<div id="content">
			<TabBarLeft />
			<keep-alive>
				<router-view />
			</keep-alive>
			<router-view name="detail" />
			<TabBarRight />
		</div>
		<Footer />
	</div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TabBarLeft from '@/components/TabBar_left';
import TabBarRight from '@/components/TabBar_right';
import axios from 'axios';
	export default{
		name : 'Home',
		components : {
			Header,
			Footer,
			TabBarLeft,
			TabBarRight,
		},
		beforeRouteEnter(to, from, next){
			axios.get('/api2/users/getUser').then((res) => {
				var status = res.data.status;
				if(status === 0){	
					next(vm => {
						vm.$store.commit('user/USER_NAME',{ 
							username:res.data.data.username,
							name:res.data.data.name,
							card:res.data.data.card,
							grade:res.data.data.grade,
							category:res.data.data.category,
							teacher:res.data.data.teacher,
							department:res.data.data.department,
							teacher:res.data.data.teacher,
							major:res.data.data.major,
							research:res.data.data.research,
							politics:res.data.data.politics,
							number:res.data.data.number,
							isTeacher:res.data.data.isTeacher,
							userHead:res.data.data.userHead,
							relationship : res.data.data.relationship,
							marriage : res.data.data.marriage,
							nation : res.data.data.nation,
							number : res.data.data.number,
							address : res.data.data.address,
							birth : res.data.data.birth,
							degree : res.data.data.degree,
 						});
					});
				}
				else{
					next('/login');
				}
				
			});
		},
	}
</script>

<style scoped>
#body .body_up{
		width:100%;
		height:50%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	#body .body_up .notice{
		width: 50%;
		height: 100%;
		border-bottom: 1px solid black;
		border-right: 1px solid black;
		margin-right:3px;
	}
	#body p{
		width:100%;
		height:15%;
		background-color:#AFEEEE;
		border-bottom: 1px solid black;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	#body .body_up .apply{
		width: 50%;
		height: 100%;
		border-bottom: 1px solid black;
		border-left: 1px solid black;
		margin-left:3px;
	}
	#body .body_bottom{
		width:100%;
		height:50%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	#body .body_bottom .lesson{
		width: 50%;
		height: 100%;
		margin-right:3px;
		border-right: 1px solid black;
		border-top: 1px solid black;
	}
	#body .body_bottom .warn{
		width: 50%;
		border-left: 1px solid black;
		border-top: 1px solid black;
		margin-left:3px;
	}
	#content{
		height: 20px;
	}
</style>