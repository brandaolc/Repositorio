
algoritmo "VerificarPesoIdeal"

var
    peso: real

inicio
    escreva("Digite seu peso em kg: ")
    leia(peso)

    se (peso >= 50) e (peso <= 100) entao
        escreva("Seu peso está na faixa ideal.")
    senao
        escreva("Seu peso não está na faixa ideal.")
    fimse
fimalgoritmo

