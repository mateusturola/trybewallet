const addTotal = (expenses) => {
  let total = 0;
  expenses.forEach((expense) => {
    total += parseFloat(
      expense.value * parseFloat(expense.exchangeRates[expense.currency].ask),
    );
  });
  return total;
};
export default addTotal;

// Requisito 8, realizado com a ajuda do Carlos Dartora

export const madeDate = () => {
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  const dataAtual = `${dia}/${mes}/${ano}`;
  return `Consulta realizada em: ${dataAtual}`;
};

export const addTags = (expenses) => {
  if (!expenses) {
    return [];
  }

  const categoriesSum = {
    Alimentação: addTotal(expenses.filter((exp) => exp.tag === 'Alimentação')),
    Lazer: addTotal(expenses.filter((exp) => exp.tag === 'Lazer')),
    Trabalho: addTotal(expenses.filter((exp) => exp.tag === 'Trabalho')),
    Transporte: addTotal(expenses.filter((exp) => exp.tag === 'Transporte')),
    Saúde: addTotal(expenses.filter((exp) => exp.tag === 'Saúde')),
  };
  const array = Object.entries(categoriesSum);
  return array;
};


export const addMethod = (expenses) => {
  if (!expenses) {
    return [];
  }

  const MethodSum = {
    Dinheiro: addTotal(expenses.filter((exp) => exp.method === 'Dinheiro')),
    'Cartão de crédito': addTotal(expenses.filter((exp) => exp.method === 'Cartão de crédito')),
    'Cartão de débito': addTotal(expenses.filter((exp) => exp.method === 'Cartão de débito')),
  };
  const array = Object.entries(MethodSum);
  return array;
};
