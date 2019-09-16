<template>
	<div class="tabbar-right">
		<div class="basisInfo">
			<div class="headImg">
				<img :src="$store.state.user.userHead">
				<input type="file" name="file" value="上传头像" @change="handleToUpload">
			</div>
			<div class="person">
				<div v-if="$store.state.user.isTeacher" style="line-height:25px;">
            		<p>工号：{{ $store.state.user.username }}</p>
					<p>姓名： {{ $store.state.user.name }}</p>
					<p>用户身份：教工</p>
            	</div>
            	<div v-else>
            		<p>学号：{{ $store.state.user.username }}</p>
					<p>姓名： {{ $store.state.user.name }}</p>
					<p>年级：{{ $store.state.user.grade }}</p>
					<p>导师：{{ $store.state.user.teacher }}</p>
					<p>用户身份：学生</p>
            	</div>
			</div>
		</div>
		<div class="lesson">
			我的课表
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import { messageBox } from '@/components/JS';
	export default{
		methods:{
			handleToUpload(ev){
				var file = ev.target.files[0];
				var param = new FormData();
				param.append('file',file,file.name);
				var config = {
					headers : {
						'Content-Type' : 'multipart/form-data'
					}
				};
				this.axios.post('/api2/users/uploadUserHead',param,config)
							.then((res)=>{
								var status = res.data.status;
								var This = this;
								if(status === 0){
									messageBox({
										title:'信息',
										content : '上传头像成功',
										ok : '确定',
										handleOk(){
											This.$store.commit('user/USER_NAME',{
												username:This.$store.state.user.username,
												name:This.$store.state.user.name,
												grade:This.$store.state.user.grade,
												category:This.$store.state.user.category,
												teacher:This.$store.state.user.teacher,
												department:This.$store.state.user.department,
												major:This.$store.state.user.major,
												research:This.$store.state.user.research,
												politics:This.$store.state.user.politics,
												number:This.$store.state.user.number,
												isTeacher:This.$store.state.user.isTeacher,
												userHead : res.data.data.userHead+'?'+Math.random(),
												relationship : This.$store.state.user.relationship,
												marriage : This.$store.state.user.marriage,
												nation : This.$store.state.user.nation,
												number : This.$store.state.user.number,
												address : This.$store.state.user.address,
												birth : This.$store.state.user.birth,
												degree : This.$store.state.user.degree,
											});
										}
									});
								}
								else{
									messageBox({
										title:'信息',
										content : '上传头像失败',
										ok : '确定',
									});
								}
							});
			},
			mounted(){
				this.axios.post('/api2/users/find',{
					username : This.$store.state.user.username,
				}).then((res)=>{
					this.teacher = res.data.result.teacher
				});
			},
		}
	}
</script>

<style>
	.tabbar-right .basisInfo .person{
		height: 50%;
		margin-top: 10%;
	}
	.tabbar-right .basisInfo .headImg input{
		width: 100%;
		height: 20%;
	}
	.tabbar-right .basisInfo .headImg img{
		width: 100%;
		height: 80%;
	}
	.tabbar-right .basisInfo .headImg{
		width: 70%;
		height: 50%;
	}
	.tabbar-right .basisInfo{
		margin-top: 5%;
		height: 50%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-bottom: 2px solid black;
	}
	.tabbar-right .lesson{
		height: 50%;
		width: 100%;
	}
	.tabbar-right{
		background-color:#AFEEEE;
		width: 20%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}	
</style>