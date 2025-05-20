import { useEffect } from 'react';
import './Biofilia.css';

function Biofilia() {
  useEffect(() => {
    const handleScroll = () => {
      const titleElement = document.querySelector('.Title');
      const scrollY = window.scrollY;

      // Calcula la posición en función del scroll
      const topPosition = Math.max(-7, 130 - scrollY * 0.5); // Más cerca del borde superior
      const leftPosition = Math.max(6, 50 - scrollY * 0.15);

      // Calcula la escala en función del scroll
      const scaleValue = Math.max(0.4, 1 - scrollY * 0.003);

      // Aplica las nuevas posiciones y escala
      titleElement.style.position = 'fixed';
      titleElement.style.top = `${topPosition}px`;
      titleElement.style.left = `${leftPosition}%`;
      titleElement.style.transform = `translateX(-${Math.max(50 - scrollY * 0.5, 0)}%) scale(${scaleValue})`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="Title">
          <img
            src="/images/Icono Biofilia.svg"
            alt="Biofilia Logo"
            style={{ height: "150px", width: "auto" }}
          />
        </div>
        </header>
        </div>
  );
}

export default Biofilia;