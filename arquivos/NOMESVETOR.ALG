algoritmo "como fazer media visualg3"

var
 numeros:vetor[1..5] de real
 soma, media: real
 i:inteiro

inicio

 numeros[1] <- 5.5
 numeros[2] <- 4.7
 numeros[3] <- 5
 numeros[4] <- 6
 numeros[5] <- 7
 soma <- 0.0
 para i de 1 ate 5 faca

 soma <- + numeros[i]
 
  fimpara
  media <- soma /5
  escreva("A média dos valores do array é: ", media)
fimalgoritmo
