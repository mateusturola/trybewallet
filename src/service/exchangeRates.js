const getExchangeRates = () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  return fetch(url)
    .then((resolve) => resolve.json())
    .then((data) => data)
    .catch((error) => error);
};

export default getExchangeRates;
