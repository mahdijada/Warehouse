import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardScreen from "./screens/DashboardScreen";
import EmergencyBroadcastScreen from "./screens/EmergencyBroadcastScreen";
import './css/main.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardScreen />} />
        <Route path="/emergency" element={<EmergencyBroadcastScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
