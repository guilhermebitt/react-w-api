-----

# Front-end React para a API CRUD em PHP

Este é o projeto de front-end em **React** para a **API RESTful de gerenciamento de usuários** construída em PHP. Ele oferece uma interface web simples e responsiva para interagir com a API, permitindo realizar todas as operações de **CRUD (Create, Read, Update, Delete)** de forma visual.

## Funcionalidades

  * **Listagem de usuários:** Exibe todos os usuários cadastrados na API.
  * **Criação de novo usuário:** Formulário para adicionar novos usuários.
  * **Edição de usuário:** Interface para atualizar os dados de um usuário existente.
  * **Exclusão de usuário:** Botão para remover usuários.
  * **Comunicação com a API:** Utiliza `fetch` ou uma biblioteca como **Axios** para se conectar com os endpoints da API.

## Estrutura de Pastas

```
/src
├── /components         # Componentes reutilizáveis (Formulário, Tabela, Botões)
├── /pages              # Páginas da aplicação (HomePage, UserPage)
├── /services           # Lógica de requisições para a API (ApiService.js)
├── App.js              # Componente principal
└── index.js            # Ponto de entrada da aplicação
```

## Instalação

1.  **Clone o repositório:**

    ```sh
    git clone https://github.com/seu-usuario/react-crud-front.git
    cd react-crud-front
    ```

2.  **Instale as dependências:**

    ```sh
    npm install
    # ou yarn
    ```

3.  **Configure a URL da API:**

      * Crie um arquivo `.env` na raiz do projeto.
      * Adicione a URL base da sua API conforme o exemplo abaixo. Certifique-se de que o endereço e a porta estão corretos.

    <!-- end list -->

    ```
    REACT_APP_API_URL=http://localhost/
    ```

## Uso

1.  **Inicie o servidor de desenvolvimento:**

    ```sh
    npm start
    ```

2.  Abra seu navegador e acesse `http://localhost:3000`.

      * A aplicação irá se conectar automaticamente com os endpoints da sua API PHP, listando os usuários ou exibindo uma mensagem de que não há dados.
      * Use a interface para criar, editar ou excluir usuários, e observe as alterações refletidas em tempo real.

## Licença

**MIT**. Veja o arquivo `LICENSE` para mais detalhes.
