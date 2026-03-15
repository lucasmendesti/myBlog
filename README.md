# 📝 MyBlog - Backend API

Esta é a API robusta de um sistema de blog, desenvolvida para gerenciar postagens com persistência de dados no MongoDB Atlas. O projeto foi construído focando em princípios de escalabilidade e organização de rotas.

## 🚀 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript
* **Express**: Framework web para criação de rotas e middlewares
* **MongoDB Atlas**: Banco de dados NoSQL em nuvem
* **Dotenv**: Gerenciamento de variáveis de ambiente para segurança

## 🛠️ Funcionalidades (CRUD)

A API expõe os seguintes endpoints para o gerenciamento de posts:

* `GET /posts` → Lista todos os posts cadastrados
* `GET /posts/:id` → Busca um post específico pelo ID
* `POST /posts` → Cria uma nova publicação
* `PUT /posts/:id` → Atualiza os dados de uma postagem existente
* `DELETE /posts/:id` → Remove um post do banco de dados

## ⚙️ Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/lucasmendesti/myBlog.git
```

### 2. Entre na pasta do backend

```bash
cd backend
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `config.env` dentro da pasta `/backend` e adicione:

```env
DATABASE_URL=mongodb+srv://<usuario>:<senha>@cluster...
PORT=3000
```

> ⚠️ O arquivo `config.env` está no `.gitignore` por razões de segurança.

### 5. Inicie o servidor

```bash
node server.js
```

## 🛡️ Segurança e Tratamento de Erros

* Implementação de **Percent Encoding** para caracteres especiais na string de conexão.
* Uso de **ObjectIds nativos do MongoDB** para validação de integridade nas buscas.
* **Estrutura de rotas modularizada** para facilitar manutenção e escalabilidade.

---

## 👨‍💻 Autor

Desenvolvido por **Lucas Mendes**
