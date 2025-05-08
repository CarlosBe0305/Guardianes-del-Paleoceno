
import './App.css';
import NavFAB from './Pages/Components/NavFAB';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <NavFAB />
        <HomePage />
        
      </header>

    </div>
  );
}

export default App;
