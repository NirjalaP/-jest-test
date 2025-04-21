<template>
  <div class="app">
    <img src="./assets/logo.png" alt="Vue logo">
    <MessageComponent msg="this is my first Vue app!"/>
  </div>
</template>

<script>
import MessageComponent from './components/MessageComponent.vue'

export default {
  name: 'App',
  components: {
    MessageComponent
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
