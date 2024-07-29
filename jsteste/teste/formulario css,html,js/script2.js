// Obtém uma referência ao formulário de cadastro, ao elemento de mensagem e à lista de alunos
const cadastroForm = document.getElementById('cadastroForm');
const mensagem = document.getElementById('mensagem');
const listaAlunos = document.getElementById('listaAlunos');

// Cria um array para armazenar a lista de alunos
let alunos = [];

// Adiciona um ouvinte de evento para o evento de envio do formulário
cadastroForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Obtém os valores dos campos de entrada no formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    // Verifica se ambos os campos estão preenchidos
    if (nome && telefone) {
        // Adiciona o novo aluno ao array de alunos
        alunos.push({ nome, telefone });

        // Atualiza a lista de alunos exibida na página
        atualizarListaAlunos();

        // Exibe uma mensagem de sucesso para o usuário
        mensagem.textContent = `Aluno cadastrado com sucesso! Nome: ${nome} Telefone: ${telefone}`;
        mensagem.style.color = '#28a745'; // Define a cor da mensagem de sucesso

        // Limpa os campos do formulário
        cadastroForm.reset();
    } else {
        // Exibe uma mensagem de erro se algum campo estiver vazio
        mensagem.textContent = 'Por favor, preencha todos os campos.';
        mensagem.style.color = '#d9534f'; // Define a cor da mensagem de erro
    }
});

// Função para atualizar a lista de alunos exibida na página
function atualizarListaAlunos() {
    // Limpa o conteúdo da lista de alunos atual
    listaAlunos.innerHTML = '';

    // Adiciona cada aluno do array à lista na página
    alunos.forEach(aluno => {
        const li = document.createElement('ol'); // Cria um novo item de lista
        li.textContent = `Nome: ${aluno.nome}, Telefone: ${aluno.telefone}`; // Define o texto do item de lista
        listaAlunos.appendChild(li); // Adiciona o item de lista ao elemento de lista
    });
}
