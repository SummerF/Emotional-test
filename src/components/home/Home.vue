<template>
	<div class="container">
		<div class="content">
			<home-header></home-header>
			<div class="home">
				<h3>本次测试共 30 题</h3>
				<div class="home-list" v-for="(list, index) of testList" :key="index">
					<h4>{{list.title}}</h4>
					<div
						class="item"
						v-for="(item, i) of list.list"
						:key="i"
						@change="handleActive"
					>
						<el-radio
							:name="'now'+ index"
							:label="i"
							v-model="radio[index]"
						>
						{{item}}
						</el-radio>
					</div>
				</div>
			</div>
			<selects @handleClick="handleChange"></selects>
			<transition name="el-fade-in-linear">		
				<home-result
					:resultDate="resultDate"
					:color="dataColor"
					v-if="show"
				></home-result>
			</transition>
		</div>
	</div>
</template>
<script>
import Bscroll from 'better-scroll'
import axios from 'axios'
import HomeHeader from '../header/Header'
import Selects from '../form/select'
import HomeResult from './components/result'
import Qs from 'qs'

export default {
	name: 'Home',
	components: {
		HomeHeader,
		Selects,
		HomeResult
	},
	data () {
		return {
			href: window.location.href,
			show: false,
			isTrue: true,
			dataColor: '',
			radio: [],
			dataList: [],
			testList: [],
			resultDate: [],
			postDate: []
		}
	},
	methods :{
		getDataInfo () {
			axios.get('api/data.json')
			.then(this.dataSuccess)
		},
		dataSuccess (res) {
			res = res.data
			if (res.ret && res.data) {
				this.testList = res.data
			}
		},
		handlePostData (male,date){
			axios.post('http://neworder.ccygcj.com/user/cs/xincs', Qs.stringify({
				href: this.href,
				values: this.dataList,
				sex: male,
				date
			}))
			.then(this.getResultDateInfo)
		},
		getResultDateInfo (res) {
			if (res.data) {
				this.postDate = res.data.suiji
				this.dataColor = res.data.str
				this.show = true
				axios.get('api/callbackDate.json')
					.then(this.resultSuccess)
				this.$message({
	                showClose: true,
	                message: '提交成功',
	                type: 'success'
	            })
	            this.isTrue = false
	            setTimeout(()=>{
	            	this.scroll.scrollToElement('#result', 1000, 0, 0, 'easing')
	            }, 1000);
			}else{
				this.$message({
	                showClose: true,
	                message: '发生错误，请刷新重试',
	                type: 'error'
	            })
			}
			
		},
		resultSuccess (res) {
			console.log(res)
			this.postDate.forEach((item, index)=>{
				switch(item){
					case "red": 
						this.resultDate.push(res.data.redDates)
					break
					case "yellow" : 
						this.resultDate.push(res.data.yelloDates)
					break
					case "blue":
						this.resultDate.push(res.data.blueDates)
					break
					case "green":
						this.resultDate.push(res.data.greenDates)
					break
				}
			})
		},
		handleActive () {
			this.radio.forEach((el,index)=>{
				this.dataList.splice(index, 1, this.testList[index].list[el].split('.')[0])
			})
		},
		handleChange (male,date) {
			if (this.isTrue) {
				if (this.dataList.length !== 30) {
					this.$message({
	                    showClose: true,
	                    message: '请完整选择所有题目',
	                    type: 'warning'
	                })
				}else{
					this.handlePostData(male, date)
				}
			}else{
				this.$message({
					showClose: true,
                    message: '请勿重复提交',
                    type: 'error'
				})
			}
		},
		betterScrollInit () {
			this.scroll = new Bscroll('.container', {
				scrollY: true,
				click: true,
				resizePolling: 60
			})
		}
	},
	mounted () {
		this.getDataInfo()
		this.betterScrollInit()
	}
}
</script>
<style lang="stylus" scoped>
	@import '~assets/styles/variblies.styl'
	.container
		position: absolute
		top: 0
		left: 0
		right: 0
		bottom: 0
		width: 100%
		overflow: hidden
		.content
			overflow: hidden
	.home h3
		margin-left: .2rem
		font-size: .36rem
		line-height: .52rem
	.home-list
		padding: .2rem
	.home-list h4
		font-size: .3rem
		line-height: .48rem
	.item
		padding: .1rem
		line-height: $lineHeight
	.item label
		display: block
		line-height: $lineHeight
	.item input
		line-height: $lineHeight
	.item span
		margin-left: .1rem
		font-size: .3rem
		line-height: $lineHeight
	.item .el-radio
		white-space: inherit
</style>