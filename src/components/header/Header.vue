<template>
	<div class="head">
		<div class="head-title">
			<h3>性格色彩测试</h3>
			<p>用“红、蓝、黄、绿”四色代替人的性格类型，借助一幅幅美妙的图画来解析多变的人生；通过对“性格色彩密码”的解读，帮助你学会以“有‘色’眼睛”洞察人性，增强对人生的洞察力，并修炼个性，从而掌握自己的命运。</p>
		</div>
		<div class="head-content">
			<h2>测试指导语</h2>
			<p>选择答案时，请注意以下事项：</p>
			<p> * 选择最能符合你的选项。</p>
			<p> * 所有问题的答案没有好坏或对错之分，先完成对你较容易选择的题目，困难的随后再选，不要停顿。</p>
			<p>* 请选择让你“最自然的”“最舒服的”反应，而非“最好的”“最适合的”。换句话讲，你回答的问题是“我是谁”，而不是“我该是谁”或“我想是谁”。</p>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Header'
}
</script>
<style lang="stylus" scoped>
.head
	padding: .2rem
	.head-title h3
		font-size: .36rem
		line-height: .52rem
	.head-title p
		font-size: .28rem
		line-height: .32rem
	.head-content
		padding: .2rem 0
	.head-content h2
		font-size: .36rem
		line-height: .52rem
	.head-content p
		font-size .28rem
		line-height: .32rem
</style>