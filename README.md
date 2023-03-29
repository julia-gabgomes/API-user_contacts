# API-user_contacts

## Como rodar o projeto

### 1. Instale as dependências do projeto:

#### - Utilizando yarn: yarn install

#### - Utilizando npm: npm install

### 2. Crie um banco de dados PostgreSQL e escreva os dados de conexão no arquivo .env

#### - Esse arquivo deve ser criado a partir do arquivo .env.example e utilizar as chaves escritas nele como exemplo

### 3. Rode as migrações pelo TypeORM:

#### - Utilizando yarn: yarn typeorm migration:run -d src/data-source.ts

#### - Utilizando npm: npx typeorm-ts-node-commonjs migration:run -- -d src/data-source.ts

### 4. Inicialize o servidor:

#### - Utilizando yarn: yarn dev

#### - Utilizando npm: npm dev

### Agora a aplicação está pronta para ser testada!

#### - Para isso, utilize a seguinte documentação para conhecer as rotas:

#### - Baixe o arquivo x no Insomnia para realizar as requisições.
