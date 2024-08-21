export const Start = () => {
  return (
    <section className="flex gap-24">
      <div className="flex flex-col gap-6 items-start">
        <h1 className="text-3xl font-bold font-mono tracking-tighter">Oi, eu sou o Gustavo!</h1>
        <p>
          Sou Engenheiro de Software e tenho formação em Sistemas de Informação pela Universidade
          Federal do Sul e Sudeste do Pará (UNIFESSPA). Possuo mais de 5 anos de experiência na área
          de desenvolvimento web e já trabalhei com várias linguagens e ferramentas tanto em
          Front-end quanto em Back-end.
        </p>
        <button onClick={() => {}}>meu curriculo</button>
      </div>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/39193732?v=4"
          alt="gustavo profile image"
          className="max-w-80"
        />
      </div>
    </section>
  )
}
