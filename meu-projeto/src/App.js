
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Routes } from 'react-router-dom'; // Importe 'Routes' em vez de 'Switch'
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <Router>
        <Navbar/>

        <Routes>
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App;
