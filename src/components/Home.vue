<template>
  <div class="container">
    <section>
      <div class="presentation">
        <img class="avatar" src="https://github.com/gustavocrvls.png" alt="gustavocrvls" />
        <h1>Hi, I’m Gustavo!</h1>
      </div>
      <div class="bio">
        Eu  tenho 21 anos, estudo Sistemas de Informação na Universidade Federal do Sul
        e Sudeste do Pará. Trabalho há 3 anos com desenvolvimento, e há um pouco mais de
        6 meses com React. Como hobbies gosto de cantar e desenhar, e sou um otaku de
        carteirinha (haha).
      </div>
    </section>
    <section>
      <h1 class="title">Minhas skills</h1>
        <ul class="skills">
          <li>
            <span class="skill-item">React</span>
            <div class="skill-rank">
              <div class="circle filled"></div>
              <div class="circle filled"></div>
              <div class="circle filled"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </li>
          <li>
            <span class="skill-item">Javascript</span>
            <div class="skill-rank">
              <div class="circle filled"></div>
              <div class="circle filled"></div>
              <div class="circle filled"></div>
              <div class="circle filled"></div>
              <div class="circle filled"></div>
            </div>
          </li>
          <li>
            <span class="skill-item">HTML5</span>
            <div class="skill-rank">
              <div class="circle filled"></div>
              <div class="circle filled"></div>
              <div class="circle filled"></div>
              <div class="circle filled"></div>
              <div class="circle filled"></div>
            </div>
          </li>
          <li>
            <span class="skill-item">CSS3</span>
            <div class="skill-rank">
              <div class="circle filled"></div>
              <div class="circle filled"></div>
              <div class="circle filled"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </li>
          <li>
            <span class="skill-item">MySQL</span>
            <div class="skill-rank">
              <div class="circle filled"></div>
              <div class="circle filled"></div>
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </li>
        </ul>
    </section>
    <section>
      <h1 class="title">Meus Projetos</h1>

      <div class="projects">
        <div class="project-box">
          <img src="../assets/gestor-de-accs.png" alt="" srcset="">
        </div>

        <div class="project-box">
          <img src="../assets/gestor-de-accs.png" alt="" srcset="">
        </div>

        <div class="project-box">
          <img src="../assets/gestor-de-accs.png" alt="" srcset="">
        </div>

      </div>
    </section>
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

<style scoped>
.container {
  margin: 0 10px;
}

h1, h2 {
  /* color: #73d0ff; */
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0 10px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #f4cd7c;
}

.presentation {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.presentation  h1 {
  font-size: 3rem;
}

.avatar {
  border-radius: 50%;
  width: 6rem;
  width: 6rem;
}

section {
  margin: 5rem 0;
}

.title {
  margin-bottom: 1rem;
}

/* SKILLS */

.skills li {
  margin: .85rem 0;
  display: flex;
}

.skill-item {
  min-width: 5rem;
}

.circle {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 2px solid #f1f2f3;
  margin: 2px;
}

.circle.filled {
  background-color: #f1f2f3;
}

.skill-rank {
  display: flex;
}

/* Projects */

.projects {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}

@media(max-width: 720px) {
  .projects {
    grid-template-columns: 1fr;
  }
}

.project-box {
  border: 2px solid #f1f2f3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-box img {
  width: 100%;
  filter: saturate(0);
}

</style>
