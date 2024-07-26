// Definição da classe Livro
class Livro {
    // Construtor da classe Livro
    constructor(titulo, autor, isbn) {
      this.titulo = titulo; // Atributo para armazenar o título do livro
      this.autor = autor;   // Atributo para armazenar o autor do livro
      this.isbn = isbn;     // Atributo para armazenar o ISBN do livro
    }
  }
  
  // Definição da classe Biblioteca
  class Biblioteca {
    // Construtor da classe Biblioteca
    constructor() {
      this.livros = []; // Array para armazenar os livros da biblioteca
    }
  
    // Método para adicionar um livro à biblioteca
    adicionarLivro(livro) {
      this.livros.push(livro); // Adiciona o livro ao array de livros
      console.log(`O livro "${livro.titulo}" foi adicionado à biblioteca.`);
    }
  
    // Método para listar todos os livros na biblioteca
    listarLivros() {
      console.log('Livros na biblioteca:');
      // Itera sobre cada livro no array e exibe título e autor
      this.livros.forEach(livro => {
        console.log(`${livro.titulo} - ${livro.autor}`);
      });
    }
  
    // Método para procurar um livro pelo título
    procurarLivroPorTitulo(titulo) {
      // Utiliza o método find para procurar um livro pelo título
      const livroEncontrado = this.livros.find(livro => livro.titulo === titulo);
      if (livroEncontrado) {
        console.log(`Livro encontrado: ${livroEncontrado.titulo} - ${livroEncontrado.autor}`);
      } else {
        console.log(`Livro "${titulo}" não encontrado na biblioteca.`);
      }
    }
  
    // Método para remover um livro pelo título
    removerLivroPorTitulo(titulo) {
      // Utiliza o método filter para remover um livro pelo título
      this.livros = this.livros.filter(livro => livro.titulo !== titulo);
      console.log(`O livro "${titulo}" foi removido da biblioteca.`);
    }
  }
  
  // Criando uma instância da Biblioteca
  const minhaBiblioteca = new Biblioteca();
  
  // Adicionando alguns livros à biblioteca
  const livro1 = new Livro('Dom Quixote', 'Miguel de Cervantes', '9780199537891');
  const livro2 = new Livro('Cem Anos de Solidão', 'Gabriel Garcia Marquez', '9788535914841');
  minhaBiblioteca.adicionarLivro(livro1);
  minhaBiblioteca.adicionarLivro(livro2);
  
  // Listando todos os livros na biblioteca
  minhaBiblioteca.listarLivros();
  
  // Procurando um livro pelo título
  minhaBiblioteca.procurarLivroPorTitulo('Dom Quixote');
  
  // Removendo um livro pelo título
  minhaBiblioteca.removerLivroPorTitulo('Cem Anos de Solidão');
  
  // Listando novamente para verificar a remoção
  minhaBiblioteca.listarLivros();
  