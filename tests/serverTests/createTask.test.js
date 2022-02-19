const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

const {
  describe, before, after, it,
} = require('mocha');

chai.use(chaiHttp);

const { expect } = chai;
const { MongoClient } = require('mongodb');
const { getConnection } = require('./connectionMock');

const server = require('../../server/index');

describe('POST / tasks - create task', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });
  after(async () => {
    MongoClient.connect.restore();
  });

  describe('Quando nome e status nao sao informados', () => {
    let response;
    before(async () => {
      response = await chai.request(server)
        .post('/tasks')
        .send({});
    });
    it('retorna codigo status 400', () => {
      expect(response).to.have.status(400);
    });
    it('retorna objeto no body', () => {
      expect(response.body).to.be.an('object');
    });
    it('o objeto de resposta possui propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });
  });

  describe('Quando o nome da task já existe', () => {
    let response;
    before(async () => {
      const taskCollection = connectionMock
        .db('ebytrTodoList')
        .collection('tasksList');
      // insere uma task:
      await taskCollection.insertOne({
        name: 'task-1',
        status: 'pendente',
      });
      // insere novamente outra com mesmo nome:
      response = await chai.request(server)
        .post('/tasks')
        .send({
          name: 'task-1',
          status: 'pendente',
        });
    });

    it('retorna codigo de status 409', () => {
      expect(response).to.have.status(409);
    });
    it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });
    it('Objeto de resposta possui propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });
    it('Propriedade message contem valor "Task already registered"', () => {
      expect(response.body.message).to.be.equals('Task already registered');
    });
  });

  describe('Quando a Task é criada com sucesso', () => {
    let response;
    before(async () => {
      response = await chai.request(server)
        .post('/tasks')
        .send({
          name: 'task-2',
          status: 'pendente',
        });
    });

    it('retorna codigo de status 201', () => {
      expect(response).to.have.status(201);
    });
    it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });
    it('Objeto de resposta possui propriedade "message"', () => {
      expect(response.body).to.have.property('message');
    });
    it('Propriedade message contem valor "task created successfully"', () => {
      expect(response.body.message).to.be.equals('task created successfully');
    });
  });
});
