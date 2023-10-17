import { useEffect, useState } from "react";
import Home from "./components/Home";
import DeMap from "./components/DemMap";
import "aos/dist/aos.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DeMap" element={<Navigate to="/DeMap/Home" />} />
        <Route path="/DeMap/Home" element={<DeMap path="/DeMap/Home" />} />
        <Route
          path="/DeMap/Database"
          element={<DeMap path="/DeMap/Database" />}
        />
        <Route path="/DeMap/TTDB" element={<DeMap path="/DeMap/TTDB" />} />
        <Route path="/DeMap/Node" element={<DeMap path="/DeMap/Node" />} />
      </Routes>
    </Router>
  );
};

export default App;
