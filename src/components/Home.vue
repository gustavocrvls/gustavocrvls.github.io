<template>
  <div class="hello">
    <h2>
      Gustavo's Skills
    </h2>
    <img src="https://media4.giphy.com/media/E6jscXfv3AkWQ/giphy.gif?cid=ecf05e47afzlq393ik7xypxby55wqdff3cl8c51qqah65r2g&rid=giphy.gif" alt="" srcset="">
    <div>
      <p>
        Ainda não há muito pra ver aqui, enquanto isso acesse meu <a href="https://github.com/gustavocrvls">GitHub</a>. {{mark_github}}
      </p>
    </div>
  </div>
</template>

<script>
const octicons = require('@primer/octicons');

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Where the things happens!',
      mark_github: null,
    };
  },
  created() {
    this.mark_github = octicons.markGithub;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  /* color: #73d0ff; */
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #f4cd7c;
}
img {
  border-radius: 8px;
}

</style>
