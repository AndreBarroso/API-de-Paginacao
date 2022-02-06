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















});

