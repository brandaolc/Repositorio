algoritmo "VerificarNotaAprovacao"

var
    nota: real

inicio
    escreva("Digite a nota: ")
    leia(nota)

    se (nota >= 7) então
        escreva("Nota suficiente para aprovação.")
        senao
        escreval("nota insuficiente para reprovado")
    fimse
fimalgoritmo

