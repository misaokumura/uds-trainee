<template>
  <div id="app">
    <router-link to='/'>Home</router-link>
    <router-link to='/Exercicio01'>Exercicio01</router-link>
    <router-link to='/Exercicio03'>Exercicio03</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
