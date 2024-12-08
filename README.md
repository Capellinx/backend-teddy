
## Teste Teddy backend
Este repositório contém a implementação do backend do teste da Teddy Open Finance.

## Configuração do Ambiente

### 1. Clonando o Repositório

Clone este repositório na sua máquina local usando o seguinte comando:

```bash
git clone https://github.com/Capellinx/backend-teddy

cd frontend-teddy

code . || webstorm .
````

### 2. Definindo Variaveis de ambiente
Muito importante não pular essa etapa, pois e você não definir o projeto não irá rodar, pois ele possui validação das envs.
```bash
PORT=
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
JWT_SECRET=
JWT_EXPIRATION_TIME=
```


### 3. Instalar dependencias

```bash
$ pnpm install
```


### 4. Executar migrations

```bash
npm run migrate:run
````

### 4.1. Reverter migrations (se for necessário)

```bash
npm run migrate:revert
````


### 5. Compilar o projeto ou rodar ele

```bash
$ pnpm run start

$ pnpm run start:dev
```

### Contato
Se você tiver alguma dúvida ou sugestão, entre em contato comigo:

- Nome: Lucas Capella
- Email: capellaaa7@gmail.com
- LinkedIn: [Lucas Capella](https://www.linkedin.com/in/lucas-capella-dev/)

