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

## Principais tecnologias utilizadas

- Node JS, Mocha, Chai
---

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
```

6. Inicie a API executando o comando:
```bash
npm start
```

Verifique que no mesmo terminal onde foi feito o comando acima, tem-se a saída da porta em que o servidor está rodando,
que nesse caso é a 3000. Pronto, agora a API está em execução aguardando as entradas pelo usuário.

## Testando as respostas da API
É possível usar softwares como POSTMAN e INSOMNIA para as requisições do tipo post. 
Será mostrado aqui como se faz as requisições usando o comando **curl** do terminal.

Para que a API entregue em sua saída as respostas desejadas , é necessário que se faça uma
requisção do tipo **POST** com duas entradas no **body** da requisição. São elas **currentPage** e **quantityPages** ,
**pagina atual** e **quantidade de páginas** respectivamente. Caso alguma das entradas esteja errada,
uma messagem de erro 400 aparecerá na saída.

- Realizando a requisição usando **curl**:
  - com a API em execução, abra um segundo terminal
  - execute o comando a seguir nesse segundo terminal:
    ```bash
    curl -d '{ "currentPage": 1, "quantityPages": 10}' -H 'Content-Type: application/json' http://localhost:3000/pagination
    ```
    O valores de **currentPage** e **quantityPages** são a sua escolha. É esperado na saída, um array como nos exemplos
na figura do início deste documento.
Caso entre com um valor inválido para currentPage ou quantityPages, uma mensagem de erro 400 aparecerá na saída.

---
## Testes automatizados
1. Verifique se a API está em execução. Caso esteja, no terminal em que ela está em execução, pressione **crtl c**.
2. Para rodar os testes execute o comando abaixo: 
```bash
npm test
```
