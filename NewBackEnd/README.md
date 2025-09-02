# ts-mvc-api

API Node.js em TypeScript (MVC) com Express, Axios, Nodemon, Dotenv e Pino.

## Como rodar

1. Instale as dependências:
   ```bash
   npm i
   ```
2. Copie o `.env.example`:
   ```bash
   cp .env.example .env
   ```
3. Dev:
   ```bash
   npm run dev
   ```
   A API sobe em `http://localhost:3000`.

4. Produção / build:
   ```bash
   npm run build
   npm start
   ```

## Rotas

- `GET /health` — status da API
- `GET /api/hello` — retorna `{"message":"Olá, mundo!"}`
- `GET /api/http/ip` — exemplo com Axios usando `https://httpbin.org/ip`

## Estrutura

```
src/
  app.ts
  server.ts
  config/env.ts
  lib/logger.ts
  routes/index.ts
  controllers/HelloController.ts
  controllers/HttpController.ts
  services/HelloService.ts
  middlewares/errorHandler.ts
  utils/http.ts
```
