class car {
    constructor (marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.velocidade = 0;
    }


acelerar(){
    this.velocidade += 10;
return `velocidade: ${this.velocidade} km/h `;

}
frear(){
    this.velocidade -= 5;
    if (this.velocidade <0) this.velocidade = 0
    return`velocidade: ${this.velocidade} km/h`;

}
}
const meuCarro = new car('honda', 'civic', '2021')
console.log(meuCarro.acelerar());
console.log(meuCarro.frear());