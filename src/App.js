import './App.css';
import NavFAB from './Pages/Components/NavFAB';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LineaTiempo from './Pages/LineaTiempo';
import Escaner from './Pages/Escaner';
import LibroExplorador from './Pages/LibroExplorador';

function App() {
  return (
    <div className="App">
      <Router>
        <NavFAB />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LineaTiempo" element={<LineaTiempo />} />
          <Route path="/Escaner" element={<Escaner />} />
          <Route path="/LibroExplorador" element={<LibroExplorador />} />
          {/* Puedes agregar más rutas aquí según sea necesario */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
