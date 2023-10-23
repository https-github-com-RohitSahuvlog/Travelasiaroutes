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
import ActivityLevels from "./components/activityLevel/activityLevel";
import JapanTrip from "./components/travel-group/Japan-trip/japan-tour";
import BangladeshTrip from "./components/travel-group/bangladesh-trip/banglades-tour";
import LaosTrip from "./components/travel-group/laos-trip/laos-tour";
import PhilippinesTrip from "./components/travel-group/philippines/philippine-tour";
import UzbekistanTrip from "./components/travel-group/uzbekistan/uzbekistan-tour";
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
        <Route path="/travel-groups/japan" element={<JapanTrip />} />
        <Route path="/travel-groups/bangladesh" element={<BangladeshTrip />} />
        <Route path="/travel-groups/laos" element={<LaosTrip />} />
        <Route path="/travel-groups/philippines" element={<PhilippinesTrip />} />
        <Route path="/travel-groups/uzbekistan" element={<UzbekistanTrip />} />
        <Route path="/activitylevel" element={<ActivityLevels />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
