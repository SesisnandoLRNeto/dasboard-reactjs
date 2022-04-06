const formatCurrency = (currency: number) => {
  return currency.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
};

export default formatCurrency;
