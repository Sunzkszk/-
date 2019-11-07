<template>
	<div class="infochange">
		<div class="information">
			<p>姓名：<input type="text" :value="$store.state.user.name" disabled="disabled"></p>
			<p>学号：<input type="text" :value="$store.state.user.username" disabled="disabled"></p>
			<p>院系：<input type="text" :value="$store.state.user.department" disabled="disabled"></p>
			<p>专业：<input type="text" :value="$store.state.user.major" disabled="disabled"></p>
			<p>研究方向：<input type="text" :value="$store.state.user.research" id="research"></p>
			<p>导师：<input type="text" :value="$store.state.user.teacher" style="color:#696969;" disabled="disabled"></p>
			<p>政治面貌：<input type="text" :value="$store.state.user.politics" id="politics"></p>
			<p>出生日期：<input type="date" id="birth" @click="ddd" :value="$store.state.user.birth"></p>
			<p>婚姻状况：<select id="marriage" :default="$store.state.user.marriage"><option>未婚</option><option>已婚</option><option>丧偶</option></select></p>
			<p>民族：<input type="text" :value="$store.state.user.nation" id="nation"></p>
			<p>学生类型：<input type="text" :value="$store.state.user.category" disabled="disabled"></p>
			<p>学位类型：<input type="text" :value="$store.state.user.degree" disabled="disabled"></p>
			<p>身份证号：<input type="text" :value="$store.state.user.number" id="number"></p>
			<p>家庭住址：<input type="text" :value="$store.state.user.address" id="address"></p>
		</div>
		<div class="submit"><button @click="InfoChange">提交</button></div>
	</div>
</template>

<script>
	import { messageBox } from '@/components/JS';
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			ddd(){
				console.log();
			},
			InfoChange(){
            	this.axios.post('/api2/users/infoChange',{
					username : this.$store.state.user.name,
                	research : document.getElementById("research").innerHTML,
                	politics : document.getElementById("politics").innerHTML,
                	marriage : document.getElementById("politics").value,
					nation : document.getElementById("politics").innerHTML,
					number : document.getElementById("politics").innerHTML,
					address : document.getElementById("politics").innerHTML,
					birth : document.getElementById("politics").value,
            	}).then((res)=>{
                	var status = res.data.status;
                	var This = this;
                	if(status===0){
                    	messageBox({
                        	title : '修改',
                        	content : '修改信息成功',
                        	ok : '确定',
                        	handleOk(){
                            	This.$router.push('/home');
                        	}
                    	});
                	}
                	else{
                     	messageBox({
                        	title : '修改',
                        	content : '修改信息失败',
                        	ok : '确定'
                    	});
                	}
            	});
        	}
		}
	}
</script>

<style scoped>
	.infochange button{
		height: 25px;
		width: 45px;
		font-size: 1rem;
		text-align: center;
	}
	.infochange .information p{
		font-size: 1rem;
		
		font-weight: bold;
	}
	.infochange .information{
		width: 100%;	
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}
	.infochange{
		display: flex;
		align-items: center;
		flex-direction:column;
		height: 100%;
	}
</style>