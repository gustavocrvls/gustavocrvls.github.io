<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kufam:ital,wght@0,400;0,700;1,400;1,700&display=swap');

#app {
  font-family: 'Kufam', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
}

body {
  background-color: #1f2430;
  color: #c7c8c2;
}
</style>
