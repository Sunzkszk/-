<template>
	<div id="student">
		<!--左侧待选择-->
		<div class="unchoosed">
			<!--教师列表-->
			<ul v-if="temp">
				<li v-for="item in items" :key="item.name">
					<img :src="item.userHead" @click="teacherInfo(item)">
					<p @click="chooseTeacher(item)" :id="item.username" style="color:black;">{{item.name}}</p>
				</li>
			</ul>
			<!--教师详细信息-->
			<div class="teacherinfo" v-else>
				<div class="teacherinfo_top">
					<i class="iconfont icon-fanhui" @click="Back"></i>
					<h2>教师信息</h2>
				</div>
				<div class="teacherinfo_bottom">
					<img :src="userHead">
					<p>{{name}}</p>
					<p>工号：{{username}}</p>
				</div>
			</div>
		</div>
		<!--中部选择符号-->
		<div class="change">
			<i class="iconfont icon-jiantou_you" @click="moveRight"></i>
			<i class="iconfont icon-jiantou_zuo" @click="moveLeft"></i>
		</div>
		<!--右侧选择结果-->
		<div class="choosed">
			<div class="choosed_top">
				<ul>
					<p>{{item_selected[0]}}</p>
					<p>{{item_selected[1]}}</p>
					<p>{{item_selected[2]}}</p>
					<p>{{item_selected[3]}}</p>
					<p>{{item_selected[4]}}</p>
				</ul>
			</div>
			<div class="choosed_bottom">
				<button @click="submit">提交</button>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import { messageBox } from '@/components/JS';
	import vue from 'vue';
	export default {
		data(){
			return{
				items:this.axios.get('/api2/users/getTeacher').then((res)=>{this.items = res.data.result;}),
				temp : true,
				userHead : '',
				name:'',
				username:'',
				i : 0,
				z : 0,
				item_before : '',
				item_selected:[],
				status:[],
				hassend:this.axios.post('/api2/users/hassendEmail',{
					username : this.$store.state.user.username,
				}).then((res)=>{
					this.hassend = res.data.result.hassendEmail;
				}),
			}
		},
		methods : {
			//查看教师详细信息
			teacherInfo(item){
				this.temp = !this.temp;
				this.userHead = item.userHead;
				this.name = item.name;
				this.username = item.username;
			},
			//返回上一级
			Back(){
				this.temp = !this.temp;
			},
			//选中教师
			chooseTeacher(item){
				for(var i=0;i<5;i++){
					if(this.item_selected[i]!=''){
						break;
					}
				}

				for(var z=0;z<5;z++){
					if(this.item_selected[z] == item.name){
						return
					}
				}
				console.log(i);
				if(i==5){
					return;
				}
				else{
					document.getElementById(item.username).style.background = 'red';
					this.item_before = item.username;
				}
			},
			//将选中教师移至右侧
			moveRight(){
				for(var j=0;j<this.items.length;j++){
					if(document.getElementById(this.items[j].username).style.background == 'red'){
						console.log(this.items[j].name);
						this.$set(this.item_selected,this.z,this.items[j].name);
						this.z++;
						document.getElementById(this.items[j].username).style.background = '';
					}
				}
			},
			//撤销选中教师
			moveLeft(){
				this.$set(this.item_selected,--this.z,'');
			},
			//提交所选教师
			submit(){
				if(!this.hassend){
					for(var k=0;k<5;k++){
						this.axios.post('/api2/mail/sendEmail',{
							fromUser : this.$store.state.user.username,
							fromName : this.$store.state.user.name,
							fromNumber : this.$store.state.user.number,
							toUser : this.item_selected[k],
						}).then((res) => {
							this.status.push(res.data.status);
						});
					}
					for(var i=0;i<status.length;i++){
						if(status[i]!='0'){
							break;
						}
					}
					if(i!=status.length){
						var This = this;
						messageBox({
							title : '发送',
							content : '发送失败',
							ok : '确定',
							handleOk(){
								This.$router.back();
							}
						});
					}
					else{
						this.axios.post('/api2/users/emailstatusChange',{
							hassendEmail : true,
						}).then((res)=>{
							
						});
						var This = this;
						messageBox({
							title : '发送',
							content : '发送成功',
							ok : '确定',
							handleOk(){
								This.$router.push('/home');
								console.log('ss');
							}
						});
						this.axios.post('/api2/users/hassendEmail',{
							username : this.$store.state.user.username,
						}).then((res)=>{
							this.hassend = res.data.result.hassendEmail;
						});
					}
				}
				else{
					var This = this;
					messageBox({
						title : '错误',
						content : '请勿重复提交。',
						ok : '确定',
						handleOk(){
							This.$router.push('/home');
							console.log('ss');
						}
					});
				}
			},
		},
	}
</script>

<style scoped>
	.change{
		display: flex;
		flex-direction: column;
	}
	.change i{
		font-size: 30px;
		cursor:pointer;
	}
	#student .unchoosed ul{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
		position: absolute;
	}
	#student .unchoosed ul li{
		width: 30%;
		margin:1%;
	}
	#student .unchoosed ul li img{
		width: 100%;
		height: 80%;
		cursor:pointer;
	}
	#student .unchoosed .teacherinfo .teacherinfo_bottom img{
		margin: 5px;
		width: 40%;
	}
	#student .unchoosed .teacherinfo .teacherinfo_top{
		border-bottom:1px solid black;
		position: relative;
	}
	#student .unchoosed .teacherinfo .teacherinfo_top i{
		font-size: 1.2rem;
		text-align: center;
		position: absolute;
	}
	#student .unchoosed .teacherinfo .teacherinfo_top h2{
		font-size: 1rem;
		text-align: center;
		margin-top: 1%;
		margin-bottom: 1%;
	}
	#student .unchoosed ul li p{
		text-align: center;
		cursor:pointer;
	}
	#student{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		height: 100%;
		width: 100%;
	}
	.unchoosed{
		width: 70%;
		background-color:#AFEEEE;
		height: 90%;
		position: relative;
		overflow: auto;
		border:1px solid black; 
	}
	.choosed{
		width: 15%;
		background-color:#AFEEEE;
		height: 90%;
		border:1px solid black;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.choosed .choosed_top{
		height: 85%;
		width: 100%;
		border-bottom:1px solid black;
		
	}
	.choosed .choosed_bottom{
		height: 15%;
		width: 100%;
	}
	.choosed ul{
		width: 100%;
		height: 100%;
		background-color: pink;
		text-align: center;
		background: linear-gradient(to right,#E1FFFF,#AFEEEE);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.choosed ul p{
		text-align: center;
		padding-top: 20%;
		border-bottom:1px solid black;
		height: 20%;
	}
	.choosed .choosed_bottom button{
		height: 100%;
		width: 100%;
		font-size: 1.2rem;
		font-weight: bold;
	}
</style>
