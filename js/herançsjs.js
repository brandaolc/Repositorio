class Animal{
    constructor(nome) {
        this.nome = nome;

    }
    fazerBarulho() {
        console.log('fazer barulho genérico')

    }
}
class Cachorro extends Animal{
    constructor (nome, raca){
        super (nome) 
        this.raca = raca

}
latir(){
    console.log('au, au');
}
fazerBarulho() {
    console.log ('au, au !');
    }
}

let meuCachorro = new Cachorro('Rex', 'Labrador');
meuCachorro.latir()
meuCachorro.fazerBarulho()