import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/LandingPage/Navbar";
import BesTravel from "./pages/BespokeTravel";
import LandingPage from "./pages/LandingPage";
import IndiaPage from "./components/Bydestination/India/IndiaPage";
import Itineraries from "./components/Bydestination/India/Itineraries";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bespoke" element={<BesTravel />} />
        <Route path="/country/:countryname" element={<IndiaPage />} />
        <Route path="/Itineraries" element={<Itineraries />} />
      </Routes>
    </div>
  );
}

export default App;
