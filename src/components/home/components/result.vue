<template>
	<div class="home-result" id="result" ref="result">
		<div class="result-header" >
			<h2>测试结果</h2>
			<p>你的测试结果是：<strong>{{ color }}</strong></p>
		</div>
		<div class="result-list" v-for="(dataList, index) of resultDate" :key="index">
			<div class="result-content">
				<h2 class="content-title">{{dataList.advantage.title}}</h2>
				<div class="content-text border-top">
					<h3>整体</h3>
					<p  v-for="(whlo, i) of dataList.advantage.whole" :key="i" >{{ i + 1 }}.{{whlo}}</p>
				</div>
				<div class="content-text border-top">
					<h3>生活</h3>
					<p v-for="(make, i) of dataList.advantage.make" :key="i">{{ i + 1 }}.{{make}}</p>
				</div>
				<div class="content-text border-top">
					<h3>工作</h3>
					<p v-for="(work, i) of dataList.advantage.work" :key="i">{{ i + 1 }}.{{work}}</p>
				</div>
			</div>
			<div class="result-shot">
				<h2 class="shot-title">{{dataList.shortcoming.title}}</h2>
				<div class="shot-text border-top">
					<h3>整体</h3>
					<p  v-for="(whlo, i) of dataList.shortcoming.whole" :key="i" >{{ i + 1 }}.{{whlo}}</p>
				</div>
				<div class="shot-text border-top">
					<h3>生活</h3>
					<p v-for="(make, i) of dataList.shortcoming.make" :key="i">{{ i + 1 }}.{{make}}</p>
					
				</div>
				<div class="shot-text border-top">
					<h3>工作</h3>
					<p v-for="(work, i) of dataList.shortcoming.work" :key="i">{{ i + 1 }}.{{work}}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'HomeResult',
	props:{
		color: String,
		resultDate: Array
	},
	data () {
		return {}
	}
}
</script>
<style lang="stylus" scoped>
.home-result
	margin-top: .3rem
	.result-header h2
		padding-left: .2rem
		line-height: .64rem
		font-size: .32rem
		text-align: center
		color: #fff
		background-color: #ff5562
	.result-header p
		margin: .2rem 0
		font-size: .3rem
		line-height: .6rem
		text-align: center
	.result-header strong
		color: red
	.result-content, .result-shot
		.content-title, .shot-title
			padding-left: .2rem
			font-size: .3rem
			line-height: .6rem
			color: #fff
		.content-text, .shot-text
			padding: 0 .2rem
		.content-text h3, .shot-text h3
			font-size: .3rem
			line-height: .56rem
			font-weight: bold
		.content-text p, .shot-text p
			font-size: .28rem
			line-height: .48rem
		.content-title
			background-color: #67C23A
		.shot-title
			background-color: #F56C6C		
</style>