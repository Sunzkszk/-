<template>
		<div class="tabbar-left">
			<ul class="public" style="height:39%">
				<li style="background-color:#4169E1;font-weight:bold;">公共信息</li>
				<router-link to="/home/public/学历硕士培养方案">
					<li @click="changeTitle">学历硕士培养方案</li>
				</router-link>
				<router-link to="/home/public/同力硕士培养方案">
					<li>同力硕士培养方案</li>
				</router-link>
				<router-link to="/home/public/学历博士培养方案">
					<li>学历博士培养方案</li>
				</router-link>
				<router-link to="/home/public/同力博士培养方案">
					<li>同力博士培养方案</li>
				</router-link>
				<router-link to="/home/public/本科直博培养方案">
					<li>本科直博培养方案</li>
				</router-link>
				<router-link to="/home/public/专业学位培养方案">
					<li>专业学位培养方案</li>
				</router-link>
			</ul>
			<ul class="personal" style="height:22%">
				<li style="background-color:#4169E1;font-weight:bold;">个人信息</li>
    			<router-link to="/home/personinfo/个人基本信息">
					<li @click="changeTitle">个人基本信息</li>
				</router-link>
				<router-link to="/home/personinfo/个人信息修改">
					<li @click="changeTitle">个人信息修改</li>
				</router-link>
				<router-link to="/home/personinfo/登录密码修改">
					<li>登录密码修改</li>
				</router-link>	
			</ul>
			<ul class="educate" style="height:22%">
				<li style="background-color:#4169E1;font-weight:bold;">培养管理</li>
    			<router-link to="/home/educate/个人课表查询">
					<li>个人课表查询</li>
				</router-link>
				<router-link to="/home/educate/个人成绩查询">
					<li>个人成绩查询</li>
				</router-link>
				<router-link to="/home/educate/学业师生互选">
					<li>学业师生互选</li>
				</router-link>
			</ul>
			<ul class="inter" style="height:17%">
				<li style="background-color:#4169E1;font-weight:bold;">互动信息</li>
    			<router-link to="/home/inter/教学评价">
					<li>教学评价</li>
				</router-link>
				<router-link to="/home/inter/师生互动">
					<li>师生互动</li>
				</router-link>
			</ul>
		</div>
</template>

<script>
	export default {
		data(){
			return{
				title:'',
			}
		},
		methods : {
			changeTitle(){
				this.title = event.currentTarget.innerHTML;
				this.$emit('getTitle',this.title);
			}
		},
	}
</script>

<style scoped>
	.tabbar-left ul{
		margin-bottom: 2px;
		margin-left:1px;
		background-color:#AFEEEE;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow-y: scroll;
	}
	.tabbar-left ul li{
		font-size: 1.1rem;
		margin-bottom:6.6px;
		width: 100%;
		
	}
	.tabbar-left{
		display: flex;
		flex-direction:column;
		cursor: pointer; 
		font-size: 0;
		width: 20%;
		height: 100%;
	}
</style>