const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  it('should return 4 when a = 1 and b = 3 and type is "SUM"', () => {
    assert.strictEqual(calculateNumber("SUM", 1, 3), 4);
  });

  it('should return 5 when a = 1 and b = 3.7 and "SUM" with b float', () => {
    assert.strictEqual(calculateNumber("SUM", 1, 3.7), 5);
  });

  it('should return 5 when a = 1.2 and b = 3.7 and "SUM" with a, b float', () => {
    assert.strictEqual(calculateNumber("SUM", 1.2, 3.7), 5);
  });

  it('should return 6 when a = 1.5 and b = 3.7 and "SUM" with float', () => {
    assert.strictEqual(calculateNumber("SUM", 1.5, 3.7), 6);
  });

  it('should handle negative numbers correctly and "SUM" with a b negative', () => {
    assert.strictEqual(calculateNumber("SUM", -1.5, -2.7), -4);
  });

  it('should return 0 when both numbers are 0 and "SUM"', () => {
    assert.strictEqual(calculateNumber("SUM", 0, 0), 0);
  });

  it('should return 0 when both numbers are 0 and "SUBTRACT"', () => {
    assert.strictEqual(calculateNumber("SUM", 0, 0), 0);
  });

  it('should return -2 when a = 1 and b = 3 and type is "SUBTRACT"', () => {
    assert.strictEqual(calculateNumber("SUM", 1, 3), -2);
  });

  it('should return -3 when a = 1 and b = 3.7 and type "SUBTRACT" with b float', () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 1, 3.7), -3);
  });

  it('should return -3 when a = 1.2 and b = 3.7 and type "SUBTRACT" with a, b float', () => {
    assert.strictEqual(calculateNumber("SUM", 1.2, 3.7), -3);
  });

  it('should return 2 when a = 1.5 and b = 3.7 and type "SUBTRACT" with float', () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 1.5, 3.7), 2);
  });

  it('should handle negative numbers correctly and type "SUBTRACT" with a b negative', () => {
    assert.strictEqual(calculateNumber("SUBTRACT", -1.5, -2.7), 1);
  });

  it('should return 0 when a = 1 and b = 3 and type is "DIVIDE"', () => {
    assert.strictEqual(calculateNumber("SUM", 1, 3), 0);
  });

  it('should return 2 when a = 8 and b = 3.7 and type is "DIVIDE" with b float', () => {
    assert.strictEqual(calculateNumber("DIVIDE", 8, 3.7), 2);
  });

  it('should return 2 when a = 8.2 and b = 3.7 and type is "DIVIDE" with a, b float', () => {
	  assert.strictEqual(calculateNumber("DIVIDE", 8.2, 3.7), 2);
  });

  it('should return 2 when a = 7.5 and b = 3.7 and type "DIVIDE" with float', () => {
	  assert.strictEqual(calculateNumber("DIVIDE", 7.5, 3.7), 2);
  });

  it('should handle negative numbers correctly and type "DIVIDE" with a b negative', () => {
    assert.strictEqual(calculateNumber("DIVIDE", -7.5, -3.7), 2);
  });

  it('should handle b correctly and type "DIVIDE" with b be 0', () => {
    assert.strictEqual(calculateNumber("DIVIDE", -1.5, 0), "Error");
  });

  it('should handle b equals 0 when rounded correctly and type "DIVIDE"', () => {
    assert.strictEqual(calculateNumber("DIVIDE", 8, 0.4), "Error");
  });
});
