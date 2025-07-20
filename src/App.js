import React from 'react';
import SplashScreen from './SplashScreen';
import Dashboard from './components/Dashboard';
import './styles/App.module.css';

function App() {
  return (
    <div className="App">
      <SplashScreen />
      <Dashboard />
    </div>
  );
}

export default App;