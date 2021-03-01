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
  margin: auto;
  max-width: 980px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media(max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media(max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

a {
  color: inherit;
  text-decoration: none;
}

body {
  background-color: #252525;
  color: #f1f2f3;
}
</style>
