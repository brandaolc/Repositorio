
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  

    exibirDados() {
      alert(`Nome: ${this.nome}, Idade: ${this.idade}`);
    }
  }
  

  function exibirDadosPessoa() {
    let nome = prompt("Digite o nome da pessoa:");
    let idade = prompt("Digite a idade da pessoa:");

   
    let pessoa = new Pessoa(nome, idade);
  
    
    pessoa.exibirDados();
  }
  