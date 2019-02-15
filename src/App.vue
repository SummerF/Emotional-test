<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from './components/home/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style lang="stylus" scoped>
#app
	max-width: 640px
	width: 100%
	margin: 0 auto  
</style>
