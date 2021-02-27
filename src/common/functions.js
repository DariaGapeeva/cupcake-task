export const responseTransformer = (rates) => {
  return {
    "RUB/CUPCAKE": Math.round(rates.RUB * 100) / 100,
    "USD/CUPCAKE": Math.round(rates.USD * 100) / 100,
    "EUR/CUPCAKE": Math.round(rates.EUR * 100) / 100,
    "RUB/USD": Math.round((rates.RUB * 100) / rates.USD) / 100,
    "RUB/EUR": Math.round((rates.RUB * 100) / rates.EUR) / 100,
    "EUR/USD": Math.round((rates.EUR * 100) / rates.USD) / 100,
  };
};
