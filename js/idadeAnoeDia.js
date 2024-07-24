function calcularIdade(dataNascimento) {
    // Calcula a diferença em milissegundos entre a data atual e a data de nascimento
    const diff = Date.now() - dataNascimento.getTime();

    // Converte a diferença de milissegundos para um objeto de data
    const idade = new Date(diff);

    // Extrai o ano da data de nascimento
    const ano = idade.getUTCFullYear();

    // Calcula o ano atual menos o ano de nascimento para obter a idade
    const idadeAnos = Math.abs(ano - 1970);

    // Extrai o mês e o dia da data de nascimento
    const mes = idade.getUTCMonth();
    const dia = idade.getUTCDate();

    return { anos: idadeAnos, meses: mes, dias: dia };
}

// Exemplo de uso:
const dataNascimento = new Date('2002-01-23'); // Data de nascimento (ano, mês, dia)
const idade = calcularIdade(dataNascimento);

console.log(`Idade: ${idade.anos} anos, ${idade.meses} meses e ${idade.dias} dias.`);
