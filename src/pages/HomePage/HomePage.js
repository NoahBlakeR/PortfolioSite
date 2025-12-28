import HomeHero from '../../components/HomeHero/HomeHero';
import Clients from '../../components/Clients/Clients';
import FeaturedWork from '../../components/FeaturedWork/FeaturedWork';
import Process from '../../components/Process/Process';
import About from '../../components/About/About';
import Archive from '../../components/Archive/Archive';
import Contact from '../../components/Contact/Contact';
import './HomePage.css';

const HomePage = () => (
  <main id="main" className="page home-page">
    <HomeHero />
    <Clients />
    <FeaturedWork />
    <Process />
    <About />
    <Archive />
    <Contact />
  </main>
);

export default HomePage;
