function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}
  
export default function getBudgetForCurrentYear(income, gdp, capita) {
  const prefixOne = 'income';
  const prefixTwo = 'gdp';
  const prefixThree = 'capita';
  const budget = {
    [`${prefixOne}-${getCurrentYear()}`]: income,
    [`${prefixTwo}-${getCurrentYear()}`]: gdp,
    [`${prefixThree}-${getCurrentYear()}` ]: capita
  };
  
  return budget;
}