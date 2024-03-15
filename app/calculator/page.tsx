'use client'
import { useState } from 'react';

const SolarSavingsCalculator = () => {
  const [currentBill, setCurrentBill] = useState('');
  const [solarPercentage, setSolarPercentage] = useState('');
  const [savings, setSavings] = useState('');

  const calculateSavings = () => {
    // Convert current bill to number
    const currentBillAmount = parseFloat(currentBill);
    if (isNaN(currentBillAmount)) {
      alert('Please enter a valid current bill amount.');
      return;
    }

    // Convert solar percentage to number
    const solarPercentageValue = parseFloat(solarPercentage);
    if (isNaN(solarPercentageValue) || solarPercentageValue <= 0 || solarPercentageValue >= 100) {
      alert('Please enter a valid solar percentage (between 1 and 99).');
      return;
    }

    // Calculate savings
    const savingsAmount = (currentBillAmount * solarPercentageValue) / 100;
    setSavings(savingsAmount.toFixed(2));
  };

  return (
    <div>
      <h2>Solar Savings Calculator</h2>
      <div>
        <label htmlFor="currentBill">Enter your current electricity bill (in INR):</label>
        <input type="number" id="currentBill" value={currentBill} onChange={(e) => setCurrentBill(e.target.value)} />
      </div>
      <div>
        <label htmlFor="solarPercentage">Enter the percentage of your bill you expect to save with solar:</label>
        <input type="number" id="solarPercentage" value={solarPercentage} onChange={(e) => setSolarPercentage(e.target.value)} />
      </div>
      <button onClick={calculateSavings}>Calculate Savings</button>
      {savings && <div>Your potential savings: ₹{savings}</div>}
    </div>
  );
};

export default SolarSavingsCalculator;
