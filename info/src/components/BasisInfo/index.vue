<template>
	<div class="information">
		<p>姓名：<input type="text" :value="$store.state.user.name" readonly></p>
		<p>学号：<input type="text" :value="$store.state.user.username" readonly></p>
		<p>院系：<input type="text" :value="$store.state.user.department" readonly></p>
		<p>专业：<input type="text" :value="$store.state.user.major" readonly></p>
		<p>研究方向：<input type="text" :value="$store.state.user.research" readonly></p>
		<p>导师：<input type="text" :value="$store.state.user.teacher" readonly></p>
		<p>政治面貌：<input type="text" :value="$store.state.user.politics" readonly></p>
		<p>婚姻：<select disabled="disabled" :default="$store.state.user.marriage"><option>未婚</option><option>已婚</option><option>丧偶</option></select></p>
		<p>出生日期：<input type="text" :value="$store.state.user.birth" readonly></p>
		<p>民族：<input type="text" :value="$store.state.user.nation" readonly></p>
		<p>学生类型：<input type="text" :value="$store.state.user.category" readonly></p>
		<p>学位类型：<input type="text" :value="$store.state.user.degree" readonly></p>
		<p>身份证号：<input type="text" :value="$store.state.user.number" readonly></p>
		<p>家庭住址：<input type="text" :value="$store.state.user.address" readonly></p>
	</div>
</template>

<script>
	
</script>

<style scoped>
	input{
		color:#696969;
	}
	p{
		font-size: 1rem;
		margin:5px;
		font-weight: bold;
	}
	.information{
		width: 100%;	
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}
</style>