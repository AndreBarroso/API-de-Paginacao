const sinon = require('sinon');
const chai = require('chai');

const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect } = chai;

const server = require('../src/api/app');

describe(' Testes POST http://localhost:3000/pagination ', () => {

  describe('Quando não são passadas as entradas currentPage e quantityPages', () => {
    let response;
    before(async()=>{
      response = await chai.request(server)
      .post('/pagination')
      .send({});

    });

    after(async()=>{
      
    });

    it('retorna código de status "400"', () => {
      expect(response).to.have.status(400);
    });

    it('retorna um objeto com a propriedade "error"', () => {
      expect(response.body).to.have.property('error');
    });

  });

  describe('Quando não é passada a entrada currentPage', () => {
    let response;
    before(async()=>{
      response = await chai.request(server)
      .post('/pagination')
      .send({"quantityPages": 10});

    });

    after(async()=>{
      
    });

    it('retorna código de status "400"', () => {
      expect(response).to.have.status(400);
    });

    it('retorna um objeto com a propriedade "error"', () => {
      expect(response.body).to.have.property('error');
    });

    it('a propriedade "error" tem o valor: "\\"currentPage\\" is required"', () => {
      expect(response.body.error).to.have.to.be.equals('\"currentPage\" is required');
    });

  });

  describe('Quando são passados valores inválidos em currentPage', () => {

    describe('Quando é passado valor não é numérico em currentPage', () => {
      let response;
      before(async()=>{
        response = await chai.request(server)
        .post('/pagination')
        .send({"currentPage": 'a', "quantityPages": 10});

      });

      after(async()=>{
        
      });

      it('retorna código de status "400"', () => {
        expect(response).to.have.status(400);
      });

      it('retorna um objeto com a propriedade "error"', () => {
        expect(response.body).to.have.property('error');
      });

      it('a propriedade "error" tem o valor: "\\"currentPage\\" must be a number', () => {
        expect(response.body.error).to.have.to.be.equals('\"currentPage\" must be a number');
      });

    });

    describe('Quando é passado em currentPage um valor não inteiro', () => {
      let response;
      before(async()=>{
        response = await chai.request(server)
        .post('/pagination')
        .send({"currentPage": 4.4, "quantityPages": 10});

      });

      after(async()=>{
        
      });

      it('retorna código de status "400"', () => {
        expect(response).to.have.status(400);
      });

      it('retorna um objeto com a propriedade "error"', () => {
        expect(response.body).to.have.property('error');
      });

      it('a propriedade "error" tem o valor: "\\"currentPage\\" must be an integer', () => {
        expect(response.body.error).to.have.to.be.equals('\"currentPage\" must be an integer');
      });

    });

    describe('Quando é passado 0 em currentPage', () => {
      let response;
      before(async()=>{
        response = await chai.request(server)
        .post('/pagination')
        .send({"currentPage": 0, "quantityPages": 10});

      });

      after(async()=>{
        
      });

      it('retorna código de status "400"', () => {
        expect(response).to.have.status(400);
      });

      it('retorna um objeto com a propriedade "error"', () => {
        expect(response.body).to.have.property('error');
      });

      it('a propriedade "error" tem o valor: "\\"currentPage\\" must be greater than 0', () => {
        expect(response.body.error).to.have.to.be.equals('\"currentPage\" must be greater than 0');
      });

    });
  });


  describe('Quando são passados valores inválidos em quantityPages', () => {

    describe('Quando é passado valor não é numérico em quantityPages', () => {
      let response;
      before(async()=>{
        response = await chai.request(server)
        .post('/pagination')
        .send({"currentPage": 10, "quantityPages": 'a'});

      });

      after(async()=>{
        
      });

      it('retorna código de status "400"', () => {
        expect(response).to.have.status(400);
      });

      it('retorna um objeto com a propriedade "error"', () => {
        expect(response.body).to.have.property('error');
      });

      it('a propriedade "error" tem o valor: "\\"quantityPages\\" must be a number', () => {
        expect(response.body.error).to.have.to.be.equals('\"quantityPages\" must be a number');
      });

    });

    describe('Quando é passado em quantityPages um valor não inteiro', () => {
      let response;
      before(async()=>{
        response = await chai.request(server)
        .post('/pagination')
        .send({"currentPage": 10, "quantityPages": 4.4});

      });

      after(async()=>{
        
      });

      it('retorna código de status "400"', () => {
        expect(response).to.have.status(400);
      });

      it('retorna um objeto com a propriedade "error"', () => {
        expect(response.body).to.have.property('error');
      });

      it('a propriedade "error" tem o valor: "\\"quantityPages\\" must be an integer', () => {
        expect(response.body.error).to.have.to.be.equals('\"quantityPages\" must be an integer');
      });

    });

    describe('Quando é passado um quantityPages menor que currentPage', () => {
      let response;
      before(async()=>{
        response = await chai.request(server)
        .post('/pagination')
        .send({"currentPage": 10, "quantityPages": 0});

      });

      after(async()=>{
        
      });

      it('retorna código de status "400"', () => {
        expect(response).to.have.status(400);
      });

      it('retorna um objeto com a propriedade "error"', () => {
        expect(response.body).to.have.property('error');
      });
    });
  });



  describe('Quando são passadas entradas válidas', () => {

    describe('Quando é passado { "currentPage": 3, "quantityPages": 4 }', () => {
      let response;
      before(async()=>{
        response = await chai.request(server)
        .post('/pagination')
        .send({"currentPage": 3, "quantityPages": 4});

      });

      after(async()=>{
        
      });

      it('retorna código de status "201"', () => {
        expect(response).to.have.status(201);
      });

      it('retorna um array', () => {
        expect(response.body).to.be.an('array');
      });

      it('o retorno será: ["1", "2", "**3**", "4"]', () => {
        expect(response.body[0]).to.equal('1');
        expect(response.body[1]).to.equal('2');
        expect(response.body[2]).to.equal('**3**');
        expect(response.body[3]).to.equal('4');
        expect(response.body[4]).to.equal(undefined);
      });

    });

    describe('Quando é passado { "currentPage": 1, "quantityPages": 10 }', () => {
      let response;
      before(async()=>{
        response = await chai.request(server)
        .post('/pagination')
        .send({"currentPage": 1, "quantityPages": 10});

      });

      after(async()=>{
        
      });

      it('retorna código de status "201"', () => {
        expect(response).to.have.status(201);
      });

      it('retorna um array', () => {
        expect(response.body).to.be.an('array');
      });

      it('o retorno será: ["**1**", "2", "3", "4", "5", "..."]', () => {
        expect(response.body[0]).to.equal('**1**');
        expect(response.body[1]).to.equal('2');
        expect(response.body[2]).to.equal('3');
        expect(response.body[3]).to.equal('4');
        expect(response.body[4]).to.equal('5');
        expect(response.body[5]).to.equal('...');
      });

    });

    describe('Quando é passado { "currentPage": 2, "quantityPages": 10 }', () => {
      let response;
      before(async()=>{
        response = await chai.request(server)
        .post('/pagination')
        .send({"currentPage": 2, "quantityPages": 10});

      });

      after(async()=>{
        
      });

      it('retorna código de status "201"', () => {
        expect(response).to.have.status(201);
      });

      it('retorna um array', () => {
        expect(response.body).to.be.an('array');
      });

      it('o retorno será: ["1", "**2**", "3", "4", "5", "..."]', () => {
        expect(response.body[0]).to.equal('1');
        expect(response.body[1]).to.equal('**2**');
        expect(response.body[2]).to.equal('3');
        expect(response.body[3]).to.equal('4');
        expect(response.body[4]).to.equal('5');
        expect(response.body[5]).to.equal('...');
      });

    });

    describe('Quando é passado { "currentPage": 3, "quantityPages": 10 }', () => {
      let response;
      before(async()=>{
        response = await chai.request(server)
        .post('/pagination')
        .send({"currentPage": 3, "quantityPages": 10});

      });

      after(async()=>{
        
      });

      it('retorna código de status "201"', () => {
        expect(response).to.have.status(201);
      });

      it('retorna um array', () => {
        expect(response.body).to.be.an('array');
      });

      it('o retorno será: ["1", "2", "**3**", "4", "5", "..."]', () => {
        expect(response.body[0]).to.equal('1');
        expect(response.body[1]).to.equal('2');
        expect(response.body[2]).to.equal('**3**');
        expect(response.body[3]).to.equal('4');
        expect(response.body[4]).to.equal('5');
        expect(response.body[5]).to.equal('...');
      });

    });


    describe('Quando é passado { "currentPage": 4, "quantityPages": 10 }', () => {
      let response;
      before(async()=>{
        response = await chai.request(server)
        .post('/pagination')
        .send({"currentPage": 4, "quantityPages": 10});

      });

      after(async()=>{
        
      });

      it('retorna código de status "201"', () => {
        expect(response).to.have.status(201);
      });

      it('retorna um array', () => {
        expect(response.body).to.be.an('array');
      });

      it('o retorno será: ["...", "2", "3", "**4**", "5", "6", "..."]', () => {
        expect(response.body[0]).to.equal('...');
        expect(response.body[1]).to.equal('2');
        expect(response.body[2]).to.equal('3');
        expect(response.body[3]).to.equal('**4**');
        expect(response.body[4]).to.equal('5');
        expect(response.body[5]).to.equal('6');
        expect(response.body[6]).to.equal('...');
      });

    });

    describe('Quando é passado { "currentPage": 5, "quantityPages": 10 }', () => {
      let response;
      before(async()=>{
        response = await chai.request(server)
        .post('/pagination')
        .send({"currentPage": 5, "quantityPages": 10});

      });

      after(async()=>{
        
      });

      it('retorna código de status "201"', () => {
        expect(response).to.have.status(201);
      });

      it('retorna um array', () => {
        expect(response.body).to.be.an('array');
      });

      it('o retorno será: ["...", "3", "4", "**5**", "6", "7", "..."]', () => {
        expect(response.body[0]).to.equal('...');
        expect(response.body[1]).to.equal('3');
        expect(response.body[2]).to.equal('4');
        expect(response.body[3]).to.equal('**5**');
        expect(response.body[4]).to.equal('6');
        expect(response.body[5]).to.equal('7');
        expect(response.body[6]).to.equal('...');
      });

    });


    describe('Quando é passado { "currentPage": 8, "quantityPages": 10 }', () => {
      let response;
      before(async()=>{
        response = await chai.request(server)
        .post('/pagination')
        .send({"currentPage": 8, "quantityPages": 10});

      });

      after(async()=>{
        
      });

      it('retorna código de status "201"', () => {
        expect(response).to.have.status(201);
      });

      it('retorna um array', () => {
        expect(response.body).to.be.an('array');
      });

      it('o retorno será: ["...", "6", "7", "**8**", "9", "10"]', () => {
        expect(response.body[0]).to.equal('...');
        expect(response.body[1]).to.equal('6');
        expect(response.body[2]).to.equal('7');
        expect(response.body[3]).to.equal('**8**');
        expect(response.body[4]).to.equal('9');
        expect(response.body[5]).to.equal('10');
      });

    });

    describe('Quando é passado { "currentPage": 10, "quantityPages": 10 }', () => {
      let response;
      before(async()=>{
        response = await chai.request(server)
        .post('/pagination')
        .send({"currentPage": 10, "quantityPages": 10});

      });

      after(async()=>{
        
      });

      it('retorna código de status "201"', () => {
        expect(response).to.have.status(201);
      });

      it('retorna um array', () => {
        expect(response.body).to.be.an('array');
      });

      it('o retorno será: ["...", "6", "7", "8", "9", "**10**"]', () => {
        expect(response.body[0]).to.equal('...');
        expect(response.body[1]).to.equal('6');
        expect(response.body[2]).to.equal('7');
        expect(response.body[3]).to.equal('8');
        expect(response.body[4]).to.equal('9');
        expect(response.body[5]).to.equal('**10**');
      });

    });
  });
});

