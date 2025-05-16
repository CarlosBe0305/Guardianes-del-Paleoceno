import React, { useEffect } from 'react';
import './HomePage.css';
import './Components/styles/NavFAB.css';
import ButtonLink from './Components/ButtonLink';

function HomePage() {
  useEffect(() => {
    const handleScroll = () => {
      const titleElement = document.querySelector('.Title');
      const scrollY = window.scrollY;

      // Calcula la posición en función del scroll
      const topPosition = Math.max(-7, 130 - scrollY * 0.5); // Más cerca del borde superior
      const leftPosition = Math.max(4, 50 - scrollY * 0.15);

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
          <h2>Guardianes</h2>
          <h3>del </h3>
          <h1>PALEOCENO</h1>
        </div>
        <div className="Dinosaurios-Image">
          <img src="/images/Dinosaurios.png" alt="Dinosaurios" />
        </div>
      </header>
      <div className="App-body">
        <section className="Info">
          <div className="Info-Text">
            <h4>Alianza Biofilia</h4>
            <p>
              Biofilia es una red de colaboración conformada por museos,
              universidades, centros de ciencia e instituciones dedicadas a la
              divulgación del conocimiento natural en Colombia.
            </p>
            <ButtonLink>Más Información</ButtonLink>
          </div>
          <div className="Info-Image">
            <img src="/images/Alianza-Biofilia.jpeg" alt="Alianza Biofilia" />
            
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;