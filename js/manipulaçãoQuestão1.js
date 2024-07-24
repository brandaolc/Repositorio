const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
  };
  delete pessoa.idade;
  pessoa.profissao = "Engenheiro";
  console.log(pessoa)
  console.log(pessoa.cidade);
  for (let i in pessoa) {
    console.log(i + ": " + pessoa[i]);
  }