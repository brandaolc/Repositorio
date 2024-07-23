class person{
    constructor(nome, idade){
    this.nome = nome
    this.idade = idade
    }
    ehMaiorDeIdade(){
        return this.idade >= 18? `${this.nome} é maior de idade.` : `${this.nome} não é maior de idade.`;

    }
}
const pessoa1 = new person('ana', 20);
const pessoa2 = new person('carlos', 16);
console.log(pessoa1.ehMaiorDeIdade());
console.log(pessoa2.ehMaiorDeIdade());