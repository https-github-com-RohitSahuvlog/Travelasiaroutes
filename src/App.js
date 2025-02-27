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
import SeeItiniery from "./components/Bydestination/India/see-itiniery";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import PrivacyPolicy from "./pages/privacy_policy";
import TermsAndConditions from "./pages/Booking-terms-conditions";
import TravelForm from "./pages/booking-form";
import PageError from "./pages/PageError";
import { useEffect } from "react";
import { getItineraryTrip } from "./redux/action/travel";
import { useDispatch } from "react-redux";
import Trip from "./components/travel-group/Trip/trip-tour";
import ClotheslandingPage from "./components/clothes/landingclothes";
import ProductDetails from "./components/clothes/product/productdetails";
import CartPage from "./components/clothes/product/CartPage";


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getItineraryTrip();
        dispatch({
          type: 'SET_ITINERARY_TRIP',
          payload: data,
        });
      } catch (error) {
        console.error('Error fetching itinerary trip data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/booking-terms" element={<TermsAndConditions />} />
        <Route path="/bespoke" element={<BesTravel />} />
        <Route path="/booking-form" element={<TravelForm />} />
        <Route path="/country/:countryname" element={<IndiaPage />} />
        <Route path="/classic/:countryname" element={<SeeItiniery />} />
        <Route path="/Itineraries" element={<Itineraries />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/travel-groups" element={<TravelGroups />} />
        <Route path="/activitylevel" element={<ActivityLevels />} />
        <Route path="/travel-groups/:itineraryname" element={<Trip />} />
        <Route path="/product/rugs" element={<ClotheslandingPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product/checkout" element={<CartPage />} />
        <Route path="/pageerror" element={<PageError />} />
      </Routes>
      <Footer />
      < ScrollToTopButton />
    </div >
  );
}

export default App;
