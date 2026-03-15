# 📝 MyBlog - Backend API

Esta é a API robusta de um sistema de blog, desenvolvida para gerenciar postagens com persistência de dados no MongoDB Atlas. O projeto foi construído focando em princípios de escalabilidade e organização de rotas.

## 🚀 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução Javascript.
* **Express**: Framework web para criação de rotas e middlewares.
* **MongoDB Atlas**: Banco de dados NoSQL em nuvem.
* **Dotenv**: Gerenciamento de variáveis de ambiente para segurança.

## 🛠️ Funcionalidades (CRUD)

A API expõe os seguintes endpoints para o gerenciamento de posts:

- `GET /posts`: Lista todos os posts cadastrados.
- `GET /posts/:id`: Busca um post específico pelo ID único.
- `POST /posts`: Cria uma nova publicação.
- `PUT /posts/:id`: Atualiza os dados de uma postagem existente.
- `DELETE /posts/:id`: Remove um post do banco de dados.

## ⚙️ Como rodar o projeto localmente

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/lucasmendesti/myBlog.git](https://github.com/lucasmendesti/myBlog.git)
Instale as dependências:

Bash
cd backend
npm install
Configure as Variáveis de Ambiente:
Crie um arquivo config.env na pasta /backend e adicione sua string de conexão do MongoDB:

Snippet de código
DATABASE_URL=mongodb+srv://<usuario>:<senha>@cluster...
PORT=3000
(Nota: O arquivo config.env está no .gitignore por razões de segurança).

Inicie o servidor:

Bash
node server.js
🛡️ Tratamento de Segurança e Erros
Implementação de Percent Encoding para caracteres especiais em strings de conexão.

Uso de ObjectIds nativos do MongoDB para validação de integridade nas buscas.

Estrutura de rotas modularizada para facilitar a manutenção.

Desenvolvido por Lucas Mendes