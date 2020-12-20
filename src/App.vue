<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TabBar></TabBar>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  import TabBar from '@components/TabBar'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TabBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
