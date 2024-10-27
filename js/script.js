const infoAluno = {
    nome: document.getElementById('nameAluno'),
    email: document.getElementById('email'),
    idade: document.getElementById('idade'),
    cpf: document.getElementById('cpf'),
    numeroMatricula: document.getElementById('numeroMatricula'),
    curso: document.getElementById('curso'),
}

const buttonSubmit = document.getElementById('submit');
const spans = document.querySelectorAll('.span');
const container = document.getElementById('container');
const mensagemSemCadastro = document.getElementById('mensagemSemCadastro');
const cards = document.getElementById('cards');

let alunos = [];

class Aluno {
    constructor(nome, email, idade, cpf, numeroMatricula, curso) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.cpf = cpf;
        this.numeroMatricula = numeroMatricula;
        this.curso = curso;
    }

    exibirCadastroAluno() {
        spans[0].innerText = this.nome;
        spans[1].innerText = this.email;
        spans[2].innerText = this.idade;
        spans[3].innerText = this.cpf;
        spans[4].innerText = this.numeroMatricula;
        spans[5].innerText = this.curso;
        
        container.style.display = 'flex';
    }
}

buttonSubmit.addEventListener('click', () => {
    const alunoCadastrado = new Aluno(
        infoAluno.nome.value,
        infoAluno.email.value,
        infoAluno.idade.value,
        infoAluno.cpf.value,
        infoAluno.numeroMatricula.value,
        infoAluno.curso.value,
    );

    alunos.push(alunoCadastrado);

    infoAluno.nome.value = '';
    infoAluno.email.value = '';
    infoAluno.idade.value = '';
    infoAluno.cpf.value = '';
    infoAluno.numeroMatricula.value = '';
    infoAluno.curso.value = 'espanhol';

    container.innerHTML = "";
    for (const aluno of alunos) {
        aluno.exibirCadastroAluno();
        const novoCard = cards.cloneNode(true);
        container.appendChild(novoCard);
    }

  mensagemSemCadastro.style.display = 'none';
});
