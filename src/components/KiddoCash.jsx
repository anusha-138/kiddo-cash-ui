import React from 'react';
import { Bar } from 'react-chartjs-2';
import './kiddocash.css';

const KidDashboard = () => {
  const walletBalance = 125; // Placeholder balance
  const growthData = [100, 105, 110, 115, 125]; // Simulated savings growth

  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [
      {
        label: 'Savings Growth 🌱',
        data: growthData,
        backgroundColor: ['#FFD700', '#ADFF2F', '#87CEFA', '#FFB6C1', '#90EE90'],
        borderRadius: 8,
      },
    ],
  };

  return (
    <div className="kiddo-cash">
      <h1>Welcome, Explorer! 🦊</h1>

      <div className="wallet-card">
        <p>💰 Wallet Balance</p>
        <h2>₹{walletBalance}</h2>
      </div>

      <div className="chart-section">
        <h3>Money Magic Over Time ✨</h3>
        <Bar data={data} />
      </div>

      <div className="character-tip">
        🗨️ Captain Penny says: “Your treasure chest is growing!”
      </div>
    </div>
  );
};

export default KidDashboard;
