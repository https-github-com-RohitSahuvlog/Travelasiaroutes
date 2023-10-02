import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/LandingPage/Navbar";
import BesTravel from "./pages/BespokeTravel";
import LandingPage from "./pages/LandingPage";
import IndiaPage from "./components/Bydestination/India/IndiaPage";
import Itineraries from "./components/Bydestination/India/Itineraries";
import About from "./components/AboutUs/About";
import Footer from "./components/LandingPage/Footer";
import TravelGroups from "./components/travel-group/travel-group";
import Connect from "./components/travel-group/Connect";
import ActivityLevels from "./components/activityLevel/activityLevel";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bespoke" element={<BesTravel />} />
        <Route path="/country/:countryname" element={<IndiaPage />} />
        <Route path="/Itineraries" element={<Itineraries />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/travel-groups" element={<TravelGroups />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/activitylevel" element={<ActivityLevels />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
