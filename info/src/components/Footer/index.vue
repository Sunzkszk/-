<template>
	<footer class="footer">
		<span>服务信箱:szkszk77@163.com</span>
		<span>技术支持:中国石油大学（北京）</span>
	</footer>
</template>

<script>
	export default{
		name : 'Header',
	}
</script>

<style scoped>
	.footer span{
		text-align: center;
		padding:5px;
		width: 100%;
		color:#808080;
	}
	.footer{
		width: 100%;
		background-color:#AFEEEE;
		border-top:5px #ebe8e3 solid;
		display: flex;		
	}
</style>