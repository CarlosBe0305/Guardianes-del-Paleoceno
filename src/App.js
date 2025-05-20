import './App.css';
import NavFAB from './Pages/Components/NavFAB';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Biofilia from './Pages/Biofilia';

function App() {
  return (
    <div className="App">
      <NavFAB />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Biofilia" element={<Biofilia />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
