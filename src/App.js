import logo from './logo.svg';
import './App.css';
import BodyLandingPage from './components/dashboard/LandingPage';
import ManagementActivity from './components/managementActivity/ManagementActivity';
import EnergyPage from './components/energyPage/Energypage';
import EmissionPage from "./components/emissionPage/EmissionPage";
import BodyHeader from './components/header/Header';
import RoutesPages from "./config/routes";
import Contact from "./components/contactForm/Contact";
import Banner from "./components/contactForm/Banner";
import BodyCarousel from "./components/carousel/Carousel";
import BodyDot from "./components/carousel/Dot";
import Main from "./components/header2/header2";


function App() {
  return (
    <div className="App">
      {/* <BodyLandingPage /> */}
      {/* <ManagementActivity /> */}
      {/* <EnergyPage /> */}
      {/* <EmissionPage /> */}
      {/* <BodyHeader /> */}
      < RoutesPages />
      {/* <Banner /> */}
      {/* < Contact /> */}
      {/* <BodyDot /> */}
      {/* <Main /> */}
    </div>
  );
}

export default App;
