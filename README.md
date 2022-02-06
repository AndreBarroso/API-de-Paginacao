# Boas vindas ao repositório do projeto API de Paginação!
---

Esse projeto teve como objetivo, desenvolver uma API que trabalha da seguinte forma:

- a API deve receber dois parâmetros, a página atual e a quantidade de páginas.
- se a quantidade de páginas for menor ou igual a 5, deve exibir todos os números no array
- se a quantidade for maior que 5, deverá:
  - exibir os números ao redor da página atual, compondo ao total 5 elementos exibidos
  - se o primeiro valor dos cinco exibidos não for o valor 1, adicionar reticências (...) na primeira opção
  - se o último valor dos cinco exibidos não for a última página, adicionar reticências (...) na última opção
- o módulo deverá retornar um array de strings, com as seguintes regras:
  - a página atual deverá estar marcado em negrito, na sintaxe markdown (envolto por dois asteriscos **)
  - os demais números exibidos deverão ser apresentados como strings
  - os valores não exibidos serão representados um uma string de reticências (...)
- O exemplo abaixo demonstra as páginas caminhando uma a uma, a partir da página 1 até a 10
![exemplo](https://github.com/AndreBarroso/API-de-Paginacao/blob/master/exemplo.jpg)

## Instruções para executar 


1. Abra o terminal, acesse o diretório de sua preferência onde 
você deseja fazer o download, e crie uma pasta usando o comando **mkdir**:
```bash
mkdir projeto-andre
```

2. Entre no diretório que você acabou de criar: 
```bash
cd projeto-andre
```

3. Clone do projeto executando o comando a seguir:
```bash
git clone https://github.com/AndreBarroso/API-de-Paginacao.git
```

4. Acesse a pasta criada executando o comando a seguir:
```bash
cd API-de-Paginacao
```

5. Instale as dependências:
```bash
npm install
