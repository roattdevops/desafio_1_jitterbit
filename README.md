# Order Management API

## Descrição

API simples para gerenciar pedidos, permitindo a criação, leitura, atualização e exclusão de pedidos. Desenvolvida em Node.js usando JavaScript e MongoDB para armazenamento dos dados.

## Endpoints

### Criar um novo pedido

- **URL:** `http://localhost:3000/order`
- **Método:** `POST`

### Obter dados do pedido

- **URL:** `http://localhost:3000/order/:id`
- **Método:** `GET`

### Listar todos os pedidos

- **URL:** `http://localhost:3000/order/list`
- **Método:** `GET`

### Atualizar um pedido

- **URL:** `http://localhost:3000/order/:id`
- **Método:** `PUT`
- **Corpo da Requisição:**

  ```json
  {
    "valorTotal": 10000,
    "items": [
      {
        "idItem": "2434",
        "quantidadeItem": 1,
        "valorItem": 1000
      }
    ]
  }
  ```

### Deletar um pedido

- **URL:** `http://localhost:3000/order/:id`
- **Método:** `DELETE`

## Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre no diretório do projeto:

```bash
cd order-management-api
```

Instale as dependências:

```bash
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto e adicione a string de conexão do MongoDB:

```makefile
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

## Execução

Para iniciar a aplicação, execute:

```bash
npm start
```
