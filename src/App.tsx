import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import FunEvents from './pages/FunEvents';
import Passes from './pages/Passes';
import Coordinators from './pages/Coordinators';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/fun-events" element={<FunEvents />} />
          <Route path="/passes" element={<Passes />} />
          <Route path="/coordinators" element={<Coordinators />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
