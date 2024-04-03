# Testes Automatizados com Cypress para API REST

## Descrição

Este repositório contém testes automatizados desenvolvidos com o framework Cypress para testar as APIs REST fornecidas pelo site [https://restful-api.dev/](https://restful-api.dev/). Os testes são executados automaticamente por meio de uma pipeline configurada neste repositório, garantindo que as alterações no projeto sejam verificadas continuamente.

## Testes Automatizados

Os testes automatizados foram desenvolvidos utilizando o framework Cypress. Eles garantem a integridade e o funcionamento correto das APIs fornecidas pelo https://restful-api.dev/. Os testes incluem diferentes cenários de teste para solicitações nos métodos POST, GET, DELETE, PUT e PATCH, cobrindo as seguintes funcionalidades:

- Verificação da criação de objetos personalizados utilizando o método POST.
- Recuperação de dados existentes por meio de solicitações GET.
- Verificação da funcionalidade de busca de objetos individuais e em massa utilizando o método GET.
- Teste de exclusão de objetos utilizando o método DELETE.
- Atualização de objetos existentes utilizando os métodos PUT e PATCH.

Este conjunto abrangente de testes garante que todas as operações na API sejam validadas e funcionem conforme o esperado, garantindo a estabilidade e a confiabilidade do serviço.

## Execução dos Testes

Os testes são executados automaticamente por meio de uma pipeline configurada neste repositório. A pipeline é acionada sempre que ocorrem alterações no projeto, garantindo a execução contínua dos testes automatizados.

## Pré-requisitos

Para executar localmente os testes automatizados, é necessário ter o Cypress instalado. Você pode instalá-lo utilizando o npm:

```bash
npm install cypress --save-dev
```

Após a instalação, os testes podem ser executados localmente utilizando o comando:

```bash
npx cypress open
```

## Contribuições

Contribuições são bem-vindas!

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE)


