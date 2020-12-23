<template>
  <div id="app">
    <TodoHeader/>
    <TodoBody/>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoBody from "./components/TodoBody"

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoBody
  }
}
</script>

<style>
#app{
  width: 100vw ;
  height: 100vh;
  font-family: sans-serif;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
