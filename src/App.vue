<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
import anmimte from './components/home/anmimte.vue'
import home from './components/home/home.vue'
import "../static/style/reset.css"

export default {
  components:{
    anmimte,
    home
  }
}
</script>

<style>

	#app{
		height: 100%;
	}
</style>
