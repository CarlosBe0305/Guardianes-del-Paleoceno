import PopUp from './PopUp';
import React from 'react';

function PrototiposPopUp({ open, onClose }) {
  return (
    <PopUp open={open} onClose={onClose}>
      <h2>Prototipos</h2>
      <p>
        Propotipos funcionales de la Experienca "Guardianes del Paleoceno".
      </p>
      <div className="Prototipos-Grid">
        <div className="Prototipo-Card">
          <a href="/LibroExplorador" className="Prototipo-Link">
            <div className="Prototipo-Imagen">
              <img src="/Images/Caratula-LibroExplorador.png" alt="Libro del Explorador" />
            </div>
            <h4>Libro del Explorador</h4>
          </a>
        </div>
        <div className="Prototipo-Card">
          <a href="/Escaner" className="Prototipo-Link">
            <div className="Prototipo-Imagen">
              <img src="/Images/Caratula-Escaner.png" alt="Escáner" />
            </div>
            <h4>Escáner</h4>
          </a>
        </div>
        <div className="Prototipo-Card">
          <a href="/LineaTiempo" className="Prototipo-Link">
            <div className="Prototipo-Imagen">
              <img src="/Images/Caratula-LineaTiempo.png" alt="Línea de tiempo" />
            </div>
            <h4>Línea de tiempo</h4>
          </a>
        </div>
      </div>
    </PopUp>
  );
}

export default PrototiposPopUp;