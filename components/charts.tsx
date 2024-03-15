'use client'

import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SolarImpactChart = () => {
  const [monthlyUsageData, setMonthlyUsageData] = useState([]);

  useEffect(() => {
    // Function to generate monthly electricity usage data for one year
    const generateMonthlyUsage = () => {
      const monthlyUsage = [];
      const startDate = new Date("2022-01-01");
      const endDate = new Date("2022-12-31");

      for (let month = new Date(startDate); month <= endDate; month.setMonth(month.getMonth() + 1)) {
        const usage = Math.floor(Math.random() * (500 - 300 + 1)) + 300; // Random usage between 300 and 500 kWh
        monthlyUsage.push({ month: month.toLocaleDateString('en-US', { month: 'short' }), usage });
      }

      return monthlyUsage;
    };

    // Function to simulate reduction in electricity usage after adopting solar
    const simulateSolarReduction = (monthlyUsage) => {
      const reductionPercentage = 0.2; // Assuming 20% reduction after adopting solar
      return monthlyUsage.map(month => ({
        ...month,
        usage: month.usage * (1 - reductionPercentage)
      }));
    };

    // Generate monthly electricity usage data for one year
    const monthlyUsageData = generateMonthlyUsage();

    // Simulate reduction in electricity usage after adopting solar
    const monthlyUsageAfterSolar = simulateSolarReduction(monthlyUsageData);

    // Set the monthly usage data
    setMonthlyUsageData(monthlyUsageAfterSolar);
  }, []);

  return (
    <div>
      <h2>Electricity Usage Over Time</h2>
      <LineChart width={800} height={400} data={monthlyUsageData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="usage" stroke="#8884d8" name="Electricity Usage (kWh)" />
      </LineChart>
    </div>
  );
};

export default SolarImpactChart;
