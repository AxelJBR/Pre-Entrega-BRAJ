import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Catalogo from './components/Catalogo';
import FAQ from './components/FAQ';
import Contacto from './components/Contacto';
import Resenas from './components/Resenas';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/resenas" element={<Resenas />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;