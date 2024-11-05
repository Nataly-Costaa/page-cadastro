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

    exibirCadastroAluno(index) {
        const novoCard = document.createElement('article');
        novoCard.classList.add('card');

        novoCard.innerHTML = `
            <label>Nome completo: <span class="span">${this.nome}</span></label>
            <label>E-mail: <span class="span">${this.email}</span></label>
            <label>Idade: <span class="span">${this.idade}</span></label>
            <label>CPF: <span class="span">${this.cpf}</span></label>
            <label>Número de matrícula: <span class="span">${this.numeroMatricula}</span></label>
            <label>Curso escolhido: <span class="span">${this.curso}</span></label>
            <div id="botoes">
                <button id="edit">Editar</button>
                <button id="delet" data-index="${index}">Excluir</button>
            </div>
        `;

        container.appendChild(novoCard);

        novoCard.querySelector('#delet').addEventListener('click', (event) => {
            const alunoIndex = event.target.getAttribute('data-index');
            alunos.splice(alunoIndex, 1); // Remove o aluno do array
            atualizarLista(); // Atualiza a lista de alunos exibidos
        });
        
        novoCard.querySelector('#edit').addEventListener('click', (event) => {
            const btnEditar = event.target;
            
            if (btnEditar.textContent === "Editar") {
                // Transformar o card em campos editáveis
                novoCard.querySelectorAll('.span').forEach((span) => {
                const input = document.createElement('input');
                input.value = span.textContent;
                span.replaceWith(input);
            });

            btnEditar.textContent = "Salvar";

            } else {
                // Salvar as alterações
                const inputs = novoCard.querySelectorAll('input');
                this.nome = inputs[0].value;
                this.email = inputs[1].value;
                this.idade = inputs[2].value;
                this.cpf = inputs[3].value;
                this.numeroMatricula = inputs[4].value;
                this.curso = inputs[5].value;
            
                atualizarLista();
            }
        });
    }
}

function atualizarLista() {
    container.innerHTML = '';
    if (alunos.length === 0) {
        const mensagem = document.createElement('p');
        mensagem.id = 'mensagemSemCadastro';
        mensagem.textContent = 'Nenhum aluno cadastrado';
        container.appendChild(mensagem);
    } else {
        mensagemSemCadastro.style.display = 'none';
        alunos.forEach((aluno, index) => {
            aluno.exibirCadastroAluno(index);
        });
    }
}

buttonSubmit.addEventListener('click', () => {
    if (
        infoAluno.nome.value === '' ||
        infoAluno.email.value === '' ||
        infoAluno.idade.value === '' ||
        infoAluno.cpf.value === '' ||
        infoAluno.numeroMatricula.value === '' ||
        infoAluno.curso.value === ''
    ) {
        alert('Por favor, preencha todos os campos antes de cadastrar.');
        return;
    }

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

    atualizarLista();
});