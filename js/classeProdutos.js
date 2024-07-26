// Definindo a classe Produto
class Produto {
    constructor(nome, preco, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  
    // Método para calcular o valor total em estoque
    calcularValorTotal() {
      return this.preco * this.quantidade;
    }
  }
  
  // Array para armazenar produtos
  let produtos = [];
  
  // Função para adicionar um produto usando prompt
  function adicionarProduto() {
    let nome = prompt("Digite o nome do produto:");
    let preco = parseFloat(prompt("Digite o preço do produto:"));
    let quantidade = parseInt(prompt("Digite a quantidade em estoque:"));
  
    // Criando uma instância da classe Produto com os dados fornecidos
    let produto = new Produto(nome, preco, quantidade);
  
    // Adicionando o produto ao array
    produtos.push(produto);
  
    alert(`Produto ${nome} adicionado com sucesso!`);
  }
  
  // Função para exibir o valor total em estoque
  function exibirTotalEstoque() {
    let total = 0;
  
    // Iterando sobre os produtos para calcular o total
    for (let produto of produtos) {
      total += produto.calcularValorTotal();
    }
  
    alert(`Valor total em estoque: R$ ${total.toFixed(2)}`);
  }
  