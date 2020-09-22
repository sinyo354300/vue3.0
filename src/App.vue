<template>
  <div>
    <MouseMove></MouseMove>
  </div>
</template>

<script>
import MouseMove from './components/MouseMove.vue'
import {  reactive } from "vue";
export default {
  name: 'App',
  components: {
    MouseMove
  },
  setup() {
    const position = reactive({
      x: "x",
      y: "y",
    });

    return {
      position,
    };
  },
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
