import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Proyecto.css';

function Proyecto() {
    return (
    <div className="App">
      <header className="App-header">
        <div className="Logo">
          <img
            src="/Images/Icono Biofilia.svg"
            alt="Biofilia Logo"
          />
        </div>
        <Link to="/" className="Title">
          <h2>Guardianes</h2>
          <h3>del </h3>
          <h1>PALEOCENO</h1>
        </Link>
      </header>
    </div>
  );
}
export default Proyecto;