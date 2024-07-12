Algoritmo "CalculoIMC"
// Declaração de variáveis
var
   peso, altura, imc: real
   classificacao: caractere

Inicio
   // Solicita ao usuário que digite seu peso
   Escreva("Digite o seu peso em kg: ")
   Leia(peso)

   // Solicita ao usuário que digite sua altura
   Escreva("Digite a sua altura em metros: ")
   Leia(altura)

   // Calcula o IMC
   imc <- peso / (altura * altura)

   // Verifica a classificação do IMC
   Se imc < 18.5 Então
      classificacao <- "Abaixo do peso"
   Senão Se imc < 25 Então
      classificacao <- "Peso normal"
   Senão Se imc < 30 Então
      classificacao <- "Sobrepeso"
   Senão
      classificacao <- "Obesidade"
   FimSe

   // Exibe o IMC calculado e sua classificação
   Escreva("O seu IMC é ", imc:0:2)
   Escreva("Classificação: ", classificacao)

FimAlgoritmo
