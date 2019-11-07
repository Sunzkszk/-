<template>	
	<div id="body">
		<div class="body_up">
			<div class="notice">
				<p><i class="iconfont icon-tongzhi"> 通知公告</i></p>
			</div>
			<div class="apply">
				<p><i class="iconfont icon-jiekuanshenqing"> 我的申请</i></p>
			</div>
		</div>
		<div class="body_bottom">
			<div class="lesson">
				<p><i class="iconfont icon-xuejiyidongguanli"> 课程异动</i></p>
			</div>
			<div class="warn">
				<p><i class="iconfont icon-jinggao"> 学业警告</i></p>
			</div>
		</div>
	</div>
</template>

<script>
	import TabBarLeft from '@/components/TabBar_left';
	export default{

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
</style>