import React from 'react';

function BalanceDisplay({ amount, loading }) {
  if (loading) {
    return <p className="text-4xl sm:text-5xl font-bold text-ink">₹ …</p>;
  }
  const formatted = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount || 0);

  return <p className="text-4xl sm:text-5xl font-bold text-ink">{formatted}</p>;
}

export default BalanceDisplay;
