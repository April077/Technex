"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import EnergyUsageChart from "../../components/charts";
import ImpactVisualization from "@/components/piechart";

const Dashboard = () => {
  const [energyUsageData, setEnergyUsageData] = useState([]);
  const [impactData, setImpactData] = useState([]);

  useEffect(() => {
    // Generate mock data for impact of renewable energy adoption

    const mockImpactData = [
      { category: "Utility Bills", value: 6000 }, // Example: $6000 reduction in utility bills
      { category: "Savings", value: 3000 },
    ];
    setImpactData(mockImpactData);
  }, []);

  useEffect(() => {
    // Generate mock data for energy usage
    const generateMockData = () => {
      const startDate = new Date("2022-01-01");
      const endDate = new Date("2022-02-28");
      const data = [];

      for (
        let date = new Date(startDate);
        date <= endDate;
        date.setDate(date.getDate() + 1)
      ) {
        const usage = Math.floor(Math.random() * (200 - 50 + 1)) + 50; // Random usage between 50 and 200 kWh
        data.push({ date: date.toISOString().split("T")[0], usage });
      }

      return data;
    };

    const mockData = generateMockData();
    setEnergyUsageData(mockData);
  }, []);

  return (
    <div>
      <Head>
        <title>Energy Usage Dashboard</title>
        <meta
          name="description"
          content="Track your energy usage and carbon footprint"
        />
      </Head>
      <h1>Energy Usage Dashboard</h1>
      {/* Render energy usage chart */}
      <EnergyUsageChart data={energyUsageData} />
      {/* Render carbon footprint goal component */}
      {/* <CarbonFootprintGoal /> */}
      {/* Render impact visualization */}
      <ImpactVisualization data={impactData} />
    </div>
  );
};

export default Dashboard;
