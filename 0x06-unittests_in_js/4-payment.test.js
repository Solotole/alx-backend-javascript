const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment');
const { calculateNumber } = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub, consoleLogStub;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(calculateNumber).returns(10);
    consoleLogStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogStub.restore();
  });

  it('should call calculateNumber with correct arguments and log the correct message', () => {
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleLogStub.calledOnce).to.be.true;
    expect(consoleLogStub.calledWith('The total is: 10')).to.be.true;
  });
});
