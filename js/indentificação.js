let cliente={
    nome: 'maria',
    idade:'39',
    cidade: 'Brasilia'
};
for (let chave in cliente) {
    console.log (`${chave}: ${cliente[chave]}`);
    console.log('idade' in cliente);
    console.log(cliente.hasOwnProperty('cidade'))