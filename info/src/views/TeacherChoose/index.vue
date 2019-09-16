<template>
	<div>
		<!--老师界面-->
		<div id="teacher" v-if="this.$store.state.user.isTeacher">
			<Teachers />
		</div>
		<!--学生界面-->
		<div id="student" v-else>
			<Students />
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import { messageBox } from '@/components/JS';
	import Teachers from '@/components/Teachers';
	import Students from '@/components/Students';
	export default{
		components : {
			Teachers,
			Students,
		},
	}
</script>

<style scoped>
	#teacher .unchoosed table{
		width: 100%;
		border-bottom: 1px black solid;
	}
	#teacher .unchoosed table tr td{
		width: 30%;
	}
	#teacher .unchoosed table tr{
		display: flex;
		justify-content: space-around;
		align-content: center;
		text-align: center;
		height: 20px;
	}
	.change{
		display: flex;
		flex-direction: column;
	}
	.change i{
		font-size: 30px;
		cursor:pointer;
	}
	#student,#teacher{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		height: 100%;
		/*background-color: green;*/
	}
	.unchoosed{
		width: 70%;
		background-color:#AFEEEE;
		height: 90%;
		position: relative;
		overflow: auto;
		border:1px solid black; 
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
		height: 20%;
		background-color: pink;
		text-align: center;
		background: linear-gradient(to right,#E1FFFF,#AFEEEE);
		border-bottom:1px solid black;
	}
	.choosed ul p{
		text-align: center;
		padding-top: 20%;
	}
	.choosed .choosed_bottom button{
		height: 100%;
		width: 100%;
		font-size: 1.2rem;
		font-weight: bold;
	}
</style>