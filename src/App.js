import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import InfoCards from "./components/InfoCards";
import ProgramSection from "./components/ProgramSection";
import QASection from "./components/QASection";
import AboutJLA from "./components/AboutJLA";
import './assets/fonts/TTTRamillasLightRegular.ttf';
import './App.css';



const App = () => (
  <>
    <Header />
    <HeroSection />
    <InfoCards />
    <ProgramSection />
    <QASection />
    <AboutJLA />
    
  </>
);

export default App;
