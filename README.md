# Pokémon (API)

## Pré requisitos

|      | versão |
| ---- | ------ |
| yarn | v1     |
| git  | v2     |
| node | ≥ v16  |


## Instalação

Verifique se sua chave SSH está configurada no gitlab
```sh
ssh -T git@gitlab.com
```

Consiga uma cópia do projeto com o seguinte comando:
```sh
git clone git@github.com:jonfreitas/api.git
```

Instale as dependências utilizando o `yarn`
```sh
yarn install
```

Copie o conteúdo do arquivo de exemplo `./env.development` para um novo arquivo `.env` e faça as mudanças conforme necessário.
```sh
cp .env.development .env
```

## Execução

Execute o seguinte comando para iniciar a API
```sh
yarn start:dev
```
