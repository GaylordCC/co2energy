import logo from './logo.svg';
import './App.css';
import BodyLandingPage from './components/dashboard/LandingPage';
import ManagementActivity from './components/managementActivity/ManagementActivity';
import EnergyPage from './components/energyPage/Energypage';
import EmissionPage from "./components/emissionPage/EmissionPage";
import BodyHeader from './components/header/Header';

function App() {
  return (
    <div className="App">
      {/* <BodyLandingPage /> */}
      {/* <ManagementActivity /> */}
      <EnergyPage />
      {/* <EmissionPage /> */}
      {/* <BodyHeader /> */}

    </div>
  );
}

export default App;
