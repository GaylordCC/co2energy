import logo from './logo.svg';
import './App.css';
import BodyLandingPage from './components/dashboard/LandingPage';
import ManagementActivity from './components/managementActivity/ManagementActivity';
import EnergyPage from './components/energyPage/Energypage';
import EmissionPage from "./components/emissionPage/EmissionPage";
import BodyHeader from './components/header/Header';
import RoutesPages from "./config/routes";

function App() {
  return (
    <div className="App">
      {/* <BodyLandingPage /> */}
      {/* <ManagementActivity /> */}
      {/* <EnergyPage /> */}
      {/* <EmissionPage /> */}
      {/* <BodyHeader /> */}
      < RoutesPages />

    </div>
  );
}

export default App;
