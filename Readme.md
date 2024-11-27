
# Conversor de Moedas

Este projeto é uma aplicação console desenvolvida em Node.js que realiza a conversão de valores monetários entre diferentes moedas, utilizando a [ExchangeRate API](https://www.exchangerate-api.com/docs).

## Funcionalidades

- Conversão de valores monetários entre moedas.
- Exibição da taxa de conversão com 6 casas decimais.
- Validação de entradas:
  - Moeda origem e destino devem ter exatamente 3 caracteres.
  - Moeda origem ≠ moeda destino.
  - Valor monetário deve ser maior que 0.
- Arredondamento do valor convertido para 2 casas decimais.
- Encerramento da aplicação ao inserir uma entrada vazia na moeda de origem.

## Pré-requisitos

- **Node.js** (v14 ou superior)
- **npm** (Node Package Manager)

## Como Rodar o Projeto

### 1. Clonar o Repositório

Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/Biguelini/desafio2-1-ihuul
```

### 2. Configurar o Ambiente
Entre no diretório do projeto:
```bash
cd desafio2-1-ihuul
```
Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```
Preencha o arquivo `.env` com os valores necessários, utilizando a API fornecida:
```bash
API_URL=https://v6.exchangerate-api.com/v6 
API_KEY=<sua-chave-da-api>
```

### 3. Instalar Dependências
Execute o comando para instalar todas as dependências do projeto:
```bash
npm install
```

### 4. Iniciar a Aplicação
Execute o comando para instalar todas as dependências do projeto:
```bash
npm start
```

## Exemplo de Execução
Moeda origem (ou vazio para sair): USD 
Moeda destino: BRL 
Valor: 100 

Convertendo... 

USD 100,00 => BRL 500,00 
Cotação atual: USD 1,00 => BRL 5,000000

## Estrutura do Projeto
```
. 
├── ApiClient.js # Cliente para comunicação com a API 
├── Conversor.js # Lógica de conversão e validação 
├── app.js # Arquivo principal 
├── .env.example # Exemplo de configuração do ambiente 
├── package.json # Configurações do npm 
└── README.md # Documentação do projeto
```