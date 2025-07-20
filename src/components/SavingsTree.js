import React from 'react';

function SavingsTree() {
  return (
    <div className="module">
      <h2>🌳 Your Savings Tree</h2>
      <p>Water your tree with smart savings. Each deposit grows a leaf!</p>
      <progress value="60" max="100" />
      <p>You're 60% toward your goal!</p>
    </div>
  );
}

export default SavingsTree;