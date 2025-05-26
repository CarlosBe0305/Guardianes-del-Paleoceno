import './App.css';
import NavFAB from './Pages/Components/NavFAB';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LineaTiempo from './Pages/LineaTiempo';

function App() {
  return (
    <div className="App">
      <Router>
        <NavFAB />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LineaTiempo" element={<LineaTiempo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
