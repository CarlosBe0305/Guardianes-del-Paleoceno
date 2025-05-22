import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Biofilia.css';

function Biofilia() {

  useEffect(() => {
    const logoElement = document.querySelector('.Logo');
    const titleElement = document.querySelector('.Title');

    // Función de rebote tipo "easeOutBack"
    function easeOutBack(x) {
      const c1 = 4; // <--- Más grande para más rebote
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 300;
      const progress = Math.min(scrollY / maxScroll, 1);

      // Animación del logo (como ya la tienes)
      const topPosition = 130 - 135 * progress;
      const leftPosition = `calc(${50 - 50 * progress}% + ${-126 * progress}px)`;
      const translateX = 50 - 50 * progress;
      const scaleValue = 1 - 0.63 * progress;
      logoElement.style.position = 'fixed';
      logoElement.style.top = `${topPosition}px`;
      logoElement.style.left = leftPosition;
      logoElement.style.transform = `translateX(-${translateX}%) scale(${scaleValue})`;
      const minWidth = 480;
      const maxWidth = 500;
      logoElement.style.width = `${minWidth + (maxWidth - minWidth) * progress}px`;

      // Animación del Title (con rebote)
      const leftStart = -6;   // % (inicio, más a la izquierda)
      const leftEnd = 4;      // % (posición final, donde debe terminar)
      const bounceProgress = easeOutBack(progress);
      const left = leftStart + (leftEnd - leftStart) * bounceProgress;
      titleElement.style.position = 'fixed';
      titleElement.style.top = '-7px';
      titleElement.style.left = `${left}%`;
      titleElement.style.transform = 'translateX(0) scale(0.4)'; // escala fija
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

export default Biofilia;