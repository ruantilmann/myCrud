# Contexto do Qwen para o Projeto Cadastro

Este arquivo contém informações de contexto que o Qwen Code deve lembrar ao trabalhar neste projeto.

## Preferências do Usuário
- Idioma preferencial: Português do Brasil

## Informações do Projeto
- Nome do Projeto: Cadastro
- Tecnologias Principais: Node.js, Express, Sequelize, PostgreSQL
- Propósito principal: Sistema de registro de usuários com armazenamento em banco de dados

## Estrutura do Projeto
- Ponto de entrada: src/server.js
- Rotas: src/routes.js
- Controladores: src/controllers/userController.js
- Modelos: src/models/User.js
- Configuração do banco de dados: src/config/database.js
- Migrações: src/database/migrations/

## Notas de Desenvolvimento
- Uso do Docker para ambiente de desenvolvimento (docker-compose.yml)
- Sequelize como ORM para banco de dados PostgreSQL
- Sistema de migração configurado para alterações no banco de dados

## Tarefas Comuns
- Adicionar novas rotas em src/routes.js
- Criar novos controladores em src/controllers/
- Definir modelos em src/models/
- Criar migrações de banco de dados em src/database/migrations/

## Comandos Úteis
- Iniciar servidor de desenvolvimento: npm run dev
- Executar migrações do banco de dados: npx sequelize-cli db:migrate
- Criar nova migração: npx sequelize-cli migration:generate --name nome-da-migracao