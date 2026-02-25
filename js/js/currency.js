const rates = {
  USD: 1,
  INR: 83,
  EUR: 0.92,
  GBP: 0.78,
  CAD: 1.35,
  AUD: 1.52
};

export function convert(priceUSD, currency) {
  const rate = rates[currency] || 1;
  return (priceUSD * rate).toFixed(2);
}
