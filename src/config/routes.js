import * as React from "react";
import { BrowserRouter as Router, Routes, Route, useRoutes, } from "react-router-dom";
import LandingPage from "../components/dashboard/LandingPage";
import EnergyPage from "../components/energyPage/Energypage";
import EmissionPage from "../components/emissionPage/EmissionPage";
import TrainingPage from "../components/trainingPage/TrainingPage";
import Contact from "../components/contactForm/Contact";
import OdsPage from "../components/ods/OdsPage";


const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", element: <LandingPage /> },
      { path: "/energy", element: <EnergyPage /> },
      { path: "/emission", element: <EmissionPage /> },
      { path: "/training", element: <TrainingPage /> },
      { path: "/ods", element: <OdsPage /> },
      { path: "/contact", element: <Contact /> }
    ]);
    return routes;
  };
  
  const RoutesPages = () => {
    return (
      <Router>
        <AppRoutes />
      </Router>
    );
  };
  
  export default RoutesPages;

