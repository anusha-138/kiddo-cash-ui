import React from 'react';
import SavingsTree from './SavingsTree';
import ProgressPet from '../ProgressPet';
import TimeTravelTracker from './TimeTravelTracker';
import FinancialPlayground from './FinancialPlayground';
import WeeklyReportCard from './WeeklyReportCard';

function Dashboard() {
  return (
    <div>
      <SavingsTree />
      <ProgressPet />
      <TimeTravelTracker />
      <FinancialPlayground />
      <WeeklyReportCard />
    </div>
  );
}

export default Dashboard;