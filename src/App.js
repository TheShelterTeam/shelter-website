import './App.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';

import Header from './Components/Header';
import Intro from './Components/Intro';
import FinancialMechanicsAndMission from './Components/FinancialMechanicsAndMission';
import Team from './Components/Team';
import Roadmap from './Components/Roadmap';
import Tokenomics from './Components/Tokenomics';
import Nftseries0 from './Components/Nftseries0';
import Mission from './Components/Mission';
import Footer from './Components/Footer';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <Header />

      <main className="isolate">
        <Intro />
        <FinancialMechanicsAndMission />
        <Team />
        <Roadmap />
        <Tokenomics />
        <Nftseries0 />
        <Mission />

      </main>

      <Footer />
    </>
  )
}
