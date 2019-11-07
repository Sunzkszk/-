<template>
	<div id="teacher">
		<!--左侧待选择-->
		<div class="unchoosed">
			<table>
				<tr style="border-bottom:1px black solid;">
					<td style="width:20%;border-right:1px black solid;">姓名</td>
					<td style="width:40%;border-right:1px black solid;">学号</td>
					<td style="width:40%;">申请时间</td>
				</tr>
				<div v-for="student in students" style="border-bottom:1px black solid;cursor:pointer;" @click="chooseStudent(student)" :id="student.fromUser">
					<tr>
						<td style="width:20%;border-right:1px black solid;">{{student.fromName}}</td>
						<td style="width:40%;border-right:1px black solid;">{{student.fromUser}}</td>
						<td style="width:40%;">{{student.date.slice(0,10)}}</td>
					</tr>
				</div>
			</table>
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
					<p>{{student_selected[0]}}</p>
					<p>{{student_selected[1]}}</p>
					<p>{{student_selected[2]}}</p>
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
	export default{
		data(){
			return{
				tousers : '',
				students : '',
				item_before:'',
				student_selected:[],
				username_selected:[],
            pre_click:'',
				i : 0,
				z : 0,
				temp : 0,
				hassend:this.axios.post('/api2/users/hassendEmail',{
					username : this.$store.state.user.username,
				}).then((res)=>{
					this.hassend = res.data.result.hassendEmail;
				}),
			}
		},
		methods:{
			//选中教师
			chooseStudent(student){
            
            if(this.pre_click==student.fromUser && document.getElementById(student.fromUser).style.background == 'red'){
               document.getElementById(student.fromUser).style.background = '';
               return;
            }
            this.pre_click = student.fromUser;
				for(var i=0;i<3;i++){
					if(this.student_selected[i]!=''){
						break;
					}
				}
				for(var z=0;z<3;z++){
					if(this.student_selected[z] == student.fromName){
						return
					}
				}
				if(i==3){
					return;
				}
				else{
					document.getElementById(student.fromUser).style.background = 'red';
					this.student_before = student.fromUser;
				}
			},
			//将选中学生移至右侧
			moveRight(){
				for(var j=0;j<this.students.length;j++){
					if(document.getElementById(this.students[j].fromUser).style.background == 'red'){
						this.$set(this.student_selected,this.z,this.students[j].fromName);
						this.$set(this.username_selected,this.z,this.students[j].fromUser);
						this.z++;
						document.getElementById(this.students[j].fromUser).style.background = '';
					}
				}
			},
			//撤销选中学生
			moveLeft(){	
				this.$set(this.student_selected,--this.z,'');
				this.$set(this.username_selected,--this.z,'');
			},
			submit(){
				if(!this.hassend){
					this.axios.post('/api2/mail/findEmail',{
						toUser: this.$store.state.user.name,
					}).then((res)=>{
						this.students = res.data.result;
						for(var i=0;i<this.student_selected.length;i++){
							for(var j=0;j<this.students.length;j++){
								if(this.student_selected[i]==this.students[j].fromName){
									this.temp++;
								}
							}
						}
						if(this.temp==this.student_selected.length){
							this.axios.post('/api2/users/relationChange',{
								relationship : this.username_selected,
							}).then((res) => {
								var status = res.data.status;
								var This = this;
								if(status === 0){
									for(var i=0;i<this.student_selected.length;i++){
										this.axios.post('/api2/mail/deleteEmail',{
											username : this.username_selected,
										})
									}
									this.axios.post('/api2/users/emailstatusChange',{
										hassendEmail : true,
									}).then((res)=>{
										
									});
									messageBox({
										title : '提交',
										content : '提交成功',
										ok : '确定',
										handleOk(){
											This.$router.push('/home');
										}
									});
								}
								else{
									messageBox({
										title : '提交',
										content : '提交失败',
										ok : '确定',
										handleOk(){
											This.$router.back();
										}
									});
								}
							});
						}
						else{
							var This = this;
							messageBox({
								title : '失败',
								content : '数据已变化，请重新选择',
								ok : '确定',
								handleOk(){
									This.$router.back();
								}
							});
						}
					});
				}
				else{
						var This = this;
						messageBox({
							title : '错误',
							content : '请勿重复提交。',
							ok : '确定',
							handleOk(){
								This.$router.push('/home');
							}
						});
				}
			},
		},
		mounted(){	
			this.axios.post('/api2/mail/findEmail',{
				toUser: this.$store.state.user.name,
			}).then((res)=>{
				this.students = res.data.result;
			});
		},
	}
</script>

<style scoped>
	.choosed{
		width: 15%;
		background-color:#AFEEEE;
		height: 400px;
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
	.change{
		display: flex;
		flex-direction: column;
	}
	.change i{
		font-size: 30px;
		cursor:pointer;
	}
	#teacher{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
      padding-top: 2%;
	}
	.unchoosed{
		width: 70%;
		background-color:#AFEEEE;
		height: 400px;
		border:1px solid black;
		position: relative;
		overflow: auto;
	}
	#teacher .unchoosed table{
		width: 100%;
		position: absolute;
	}
	#teacher .unchoosed table tr{
		display: flex;
		text-align: center;
		height: 20px;
	}
	.submit{
		position: absolute;
		bottom: 8%;
	}
	.submit input{
		font-size: 20px;
		cursor: pointer;
	}
</style>
