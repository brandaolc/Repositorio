// Definindo a classe Veiculo
class Veiculo {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  
    // Método para exibir os detalhes do veículo
    exibirDetalhes() {
      alert(`Veículo: ${this.marca} ${this.modelo} ${this.ano}`);
    }
  }
  
  // Definindo a subclasse Carro que estende Veiculo
  class Carro extends Veiculo {
    constructor(marca, modelo, ano, cor) {
      super(marca, modelo, ano); // Chamando o construtor da superclasse Veiculo
      this.cor = cor;
    }
  
    // Método para exibir os detalhes específicos do carro
    exibirDetalhes() {
      super.exibirDetalhes(); // Chamando o método da superclasse Veiculo
      alert(`Cor: ${this.cor}`);
    }
  }
  
  // Função para criar um novo carro usando prompt
  function criarCarro() {
    let marca = prompt("Digite a marca do carro:");
    let modelo = prompt("Digite o modelo do carro:");
    let ano = parseInt(prompt("Digite o ano do carro:"));
    let cor = prompt("Digite a cor do carro:");
  
    // Criando uma instância da subclasse Carro com os dados fornecidos
    let carro = new Carro(marca, modelo, ano, cor);
  
    // Exibindo os detalhes do carro
    carro.exibirDetalhes();
  }
  