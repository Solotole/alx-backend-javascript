function displayMessage(string) {
  const newLine = '\n';
  process.stdout.write(`${string}${newLine}`);
}
module.exports = displayMessage;
