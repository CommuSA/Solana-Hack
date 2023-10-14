import { useEffect, useState } from "react";
import Home from "./components/Home";
import DeMap from "./components/DemMap";
import "aos/dist/aos.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";


export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DeMap" element={<DeMap />} />
      </Routes>
    </Router>
  );
};

export default App;
