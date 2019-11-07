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
	
</style>