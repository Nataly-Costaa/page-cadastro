# Speak'nLearn - Página de Cadastro de Alunos

Este projeto é uma página de cadastro para alunos de idiomas, desenvolvida com HTML, CSS e JavaScript, permitindo que o usuário cadastre novos alunos, visualize uma lista de alunos cadastrados, edite e remova registros de maneira interativa.

## Funcionalidades

1. **Cadastro de Alunos**: 
   - Permite inserir o nome completo, e-mail, idade, CPF, número de matrícula e o curso desejado.
   
2. **Lista de Alunos Cadastrados**:
   - Exibe todos os alunos cadastrados, com as informações organizadas em cards.

3. **Edição de Cadastro**:
   - O usuário pode editar os dados de um aluno ao clicar no botão "Editar", que transforma os campos em campos de texto editáveis. 
   - Após editar, o usuário pode salvar as alterações.

4. **Remoção de Alunos**:
   - Cada card tem a opção "Excluir", que remove o aluno da lista ao clicar.
   
## Tecnologias Utilizadas

- **HTML5**: Estrutura e semântica do conteúdo.
- **CSS3**: Estilização e layout responsivo.
- **JavaScript**: Lógica para adicionar, editar e excluir cadastros.

## Estrutura do Código

Abaixo estão os detalhes de cada arquivo que compõe o projeto Speak'nLearn:

### HTML
- **`index.html`**: Contém a estrutura principal da página, incluindo:
  - O formulário de cadastro do aluno.
  - A seção para exibir a lista de alunos cadastrados.

### CSS
- **`css/globals.css`**: Define os estilos globais e as variáveis de cor utilizadas em toda a aplicação. Inclui a importação da fonte principal e o reset de estilos padrão.
- **`css/cadastro.css`**: Estiliza o formulário de cadastro, com foco em:
  - Layout de entrada de dados (inputs).
  - Design dos botões de cadastro.
  - Responsividade e espaçamento.
- **`css/lista_cadastro.css`**: Define o layout da lista de alunos cadastrados, incluindo:
  - Estilização dos cards de alunos.
  - Design dos botões de edição e exclusão de cadastros.
  - Responsividade para exibição em diferentes tamanhos de tela.

### JavaScript
- **`js/script.js`**: Implementa a lógica de interação da página:
  - **Classe `Aluno`**: Define a estrutura de um aluno e métodos para exibir as informações cadastradas.
  - **Função `atualizarLista()`**: Atualiza a exibição da lista de alunos, controlando a renderização dos cards.
  - **Função `exibirCadastroAluno()`**: Gera e exibe o card de um aluno cadastrado, incluindo os botões de edição e exclusão.
  - **Event Listeners**:
    - Escuta o evento de clique no botão de cadastro, validando os campos obrigatórios e adicionando o aluno à lista.
    - Implementa o comportamento de edição e exclusão diretamente nos cards de alunos.

## Acesso ao Projeto

O projeto está disponível online e pode ser acessado pelo seguinte link:

[Speak'nLearn - Cadastro de Alunos](https://nataly-costaa.github.io/page-cadastro/)


