class Car {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  
    exibirInfo() {
      return `Carro: ${this.marca} ${this.modelo} (${this.ano})`;
    }
  }
  
  class EletricCar extends Car {
    constructor(marca, modelo, ano, bateria) {
      super(marca, modelo, ano);
      this.bateria = bateria;
    }
  
    exibirBateria() {
      return `Nível da bateria: ${this.bateria}%`;
    }
  }
  
  const meuCarroEletrico = new EletricCar('Tesla', 'Model S', 2022, 100);
  console.log(meuCarroEletrico.exibirInfo()); 
  console.log(meuCarroEletrico.exibirBateria()); 
  