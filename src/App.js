import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardScreen from "./screens/DashboardScreen";
import './css/main.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
