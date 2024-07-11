algoritmo "media_valores_array"
var
    numeros: vetor[1..5] de real
    soma, media: real
    i: inteiro
inicio
    // Inicializando o array com valores
    numeros[1] <- 10.5
    numeros[2] <- 20.3
    numeros[3] <- 30.1
    numeros[4] <- 40.9
    numeros[5] <- 50.7

    soma <- 0.0
    // Calculando a soma dos elementos do array
    para i de 1 ate 5 faca
        soma <- soma + numeros[i]
    fimpara

    // Calculando a média
    media <- soma / 5

    // Imprimindo a média
    escreva("A média dos valores do array é: ", media)
fimalgoritmo
