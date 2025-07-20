import React from 'react';
import SplashScreen from './components/SplashScreen';
import Dashboard from './components/Dashboard';
import './styles/App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // return (
  //   <div className="App">
  //     <SplashScreen />
  //     <Dashboard />
  //   </div>
  // );
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/splash" element={<SplashScreen />} />
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/learn" element={<LearningHub />} />
        <Route path="/sme" element={<SmeToolkit />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;