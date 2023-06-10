<template>
  <h1>Random Person Generator App</h1>
    <h2>This app generates random profiles and information about fictional individuals. </h2>
  <PersonGenerator/>
</template>

<script>
import PersonGenerator from './components/PersonGenerator.vue'

export default {
  name: 'App',
  components: {
    PersonGenerator
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
  width: 400px;
  height: 100vh;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1,
h2{
  margin-bottom: 1rem;
  font-weight: normal;
}
</style>
