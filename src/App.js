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
import SeeItiniery from "./components/Bydestination/India/see-itiniery";
import HimalayasTrip from "./components/travel-group/3eyeshimalayas/3eyeshimalayas-tour";
import IndiaUnseenTrip from "./components/travel-group/India-unseen/India-unseen-tour";
import OmanTrip from "./components/travel-group/oman-trip/oman-tour";
import JordanTrip from "./components/travel-group/Jordan-trip/Jordan-tour";
import IranTrip from "./components/travel-group/Iran-trip/Iran-tour";
import SaudiArabiaTrip from "./components/travel-group/Saudi-arabia-trip/Saudi-arabia-tour";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bespoke" element={<BesTravel />} />
        <Route path="/country/:countryname" element={<IndiaPage />} />
        <Route path="/classic/:countryname" element={<SeeItiniery />} />
        <Route path="/Itineraries" element={<Itineraries />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/travel-groups" element={<TravelGroups />} />
        <Route path="/travel-groups/japan" element={<JapanTrip />} />
        <Route path="/travel-groups/bangladesh" element={<BangladeshTrip />} />
        <Route path="/travel-groups/laos" element={<LaosTrip />} />
        <Route path="/travel-groups/philippines" element={<PhilippinesTrip />} />
        <Route path="/travel-groups/3eyeshimalayas" element={<HimalayasTrip />} />
        <Route path="/travel-groups/india-unseen" element={<IndiaUnseenTrip />} />
        <Route path="/travel-groups/oman" element={<OmanTrip />} />
        <Route path="/travel-groups/jordan" element={<JordanTrip />} />
        <Route path="/travel-groups/iran" element={<IranTrip />} />
        <Route path="/travel-groups/saudi-arabia" element={<SaudiArabiaTrip />} />
        <Route path="/travel-groups/uzbekistan" element={<UzbekistanTrip />} />
        <Route path="/activitylevel" element={<ActivityLevels />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
