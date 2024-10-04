const Utils = {
  calculateNumber: (type, a, b) => {
    const first = Math.round(a);
    const second = Math.round(b);
    let result = 0;
    if (type === "SUM") {
      result = first + second;
    } else if (type === "SUBTRACT") {
      result = first - second;
    } else if (type === "DIVIDE") {
      if (second === 0) {
        return "Error";
      } else if (second !== 0) {
        result = first / second;
      }
    }
    return result;
  }
}

module.exports = Utils;
