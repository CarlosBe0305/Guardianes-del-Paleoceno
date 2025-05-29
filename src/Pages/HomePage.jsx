import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './HomePage.css';
import ButtonLink from './Components/ButtonLink';
import PopUp from './Components/PopUp';
import { getTitleLeftEnd } from './utils/getTitleLeftEnd';

function HomePage() {
  const location = useLocation();
  const [popupPrototiposOpen, setPopupPrototiposOpen] = useState(false);

  // Scroll al montar
  useEffect(() => {
    setTimeout(() => {
      if (window.location.hash && window.location.hash !== "#Biofilia") {
        const yOffset = -150;
        const el = document.querySelector(window.location.hash);
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }, 100);
  }, []);

  // Scroll cuando cambia el hash
  useEffect(() => {
    if (location.hash && location.hash !== "#Biofilia") {
      setTimeout(() => {
        const yOffset = -150;
        const el = document.querySelector(location.hash);
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const titleElement = document.querySelector('.Title');
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 300; // Ajusta según lo que necesites
      const progress = Math.min(scrollY / maxScroll, 1);

      // Interpolación de valores
      const top = 130 - (137 * progress); // de 130px a -7px
      const width = window.innerWidth;
      const leftEnd = getTitleLeftEnd(width);
      const left = 50 - ((50 - leftEnd) * progress);  // de 50% a 4%
      const scale = 1 - (0.6 * progress); // de 1 a 0.4
      const translateX = 50 - (50 * progress); // de -50% a 0%

      titleElement.style.position = 'fixed';
      titleElement.style.top = `${top}px`;
      titleElement.style.left = `${left}%`;
      titleElement.style.transform = `translateX(-${translateX}%) scale(${scale})`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecuta una vez al montar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="Banner-Home">
        </div>
        <div className="Title">
          <h2>Guardianes</h2>
          <h3>del </h3>
          <h1>PALEOCENO</h1>
        </div>
        <div className="Dinosaurios-Image">
          <img src="/Images/Dinosaurios.png" alt="Dinosaurios" />
        </div>
      </header>
      <div className="App-body">
        <section className="Info" id="Biofilia">
          <div className="Info-Text">
            <h4>Alianza Biofilia</h4>
            <p>
              Biofilia es una red de colaboración conformada por museos,
              universidades, centros de ciencia e instituciones dedicadas a la
              divulgación del conocimiento natural en Colombia.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ButtonLink href="https://www.alianzabiofilia.co/" target="_blank" rel="noopener noreferrer">
                Más Información
              </ButtonLink>
            </div>
          </div>
          <div className="Info-Image">
            <img src="/Images/Alianza-Biofilia.jpeg" alt="Alianza Biofilia" />

          </div>
        </section>
        <section className="Info" id="proyecto">
          <div className="Info-Image">
            <img src="/Images/Nombre DinoPablo.png" className="NombreDinoPablo" alt="DinoPablo" />
            <img src="/Images/DinoPablo.png" alt="DinoPablo" />

          </div>
          <div className="Info-Text">
            <h4>Nuestro Proyecto</h4>
            <p>
              Guardianes del paleoceno es una experiencia educativa inmersiva pensada
              para niñas y niños entre los 7 y 10 años, que los invita a conocer el
              Paleoceno una era fascinante posterior a la extinción de los dinosaurios
              a través de una serie de estaciones interactivas y narrativas. El objetivo
              es despertar la curiosidad científica desde la infancia mediante el juego,
              la exploración táctil y la imaginación, permitiendo que el aprendizaje surja
              de manera natural y memorable mientras recorren el ecosistema prehistórico
              guiados por un personaje lúdico.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ButtonLink href={"/Proyecto"}>
                Más Información
              </ButtonLink>
            </div>
          </div>

        </section>

        <section className="Info Proceso" id="proceso">
          <img className="Decorativo1" src="/Images/Decorativo 1.png" alt="Alianza Biofilia" />

          <div className="Info-Text">
            <h4>El Proceso</h4>
            <p>
              El diseño de Biofilia fue el resultado de un proceso riguroso que combinó
              investigación académica, prototipado iterativo, pruebas con usuarios reales
              y colaboración con expertos en educación y ciencias naturales. A través de
              varias fases desde la ideación hasta la validación en campo fuimos afinando
              las actividades, el contenido visual y las estrategias pedagógicas. <br />
              Esta sección presenta cómo cada etapa del proceso contribuyó a construir
              una experiencia significativa, alineada con los intereses y capacidades
              cognitivas de los niños y niñas.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ButtonLink>Más Información</ButtonLink>
            </div>
          </div>

        </section>
        <img className="lineas-decoracion-1" src="/Images/Líneas Decoración - 1.png" alt="Fósil pequeño 2" />

        <section className="Info" id="prototipos">
          <div className="Info-Text">
            <h4>Prototipos</h4>
            <p>
              En Biofilia desarrollamos una serie de estaciones interactivas que permiten
              a los participantes tocar, observar, deducir y construir conocimiento a
              partir de la experiencia directa. Estas incluyen un escáner digital de
              fósiles, un rompecabezas de arcilla con impresiones reales, una línea de
              tiempo táctil para ubicar eventos  históricos, y una bitácora de exploración
              que guía toda la experiencia. Cada prototipo fue validado con niños y adaptado
              para lograr un equilibrio entre diversión, comprensión y participación activa.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ButtonLink onClick={() => setPopupPrototiposOpen(true)}>
                Más Información
              </ButtonLink>
            </div>
            <PopUp open={popupPrototiposOpen} onClose={() => setPopupPrototiposOpen(false)}>
              <h2>Prototipos</h2>
              <p>
                Aquí puedes poner el contenido que desees mostrar sobre los prototipos.
              </p>
            </PopUp>
          </div>
          <div className="Info-Image fossil-group">
            <img className="fossil-small1" src="/Images/Fósil 1.png" alt="Fósil grande" />
            <img className="fossil-main" src="/Images/Fósil 2.png" alt="Fósil pequeño 1" />
            <img className="fossil-small2" src="/Images/Fósil 3.png" alt="Fósil pequeño 2" />
          </div>
        </section>

        <section className="Info SobreNosotros" id="sobre-nosotros">

          <div className="Info-Text">

            <h4>Sobre Nosotros</h4>
            <p>
              Somos un equipo de estudiantes y profesionales de diseño, unidos por la
              convicción de que aprender puede y debe ser una experiencia emocionante.
              A través de Biofilia, nos propusimos acercar a los más pequeños al
              conocimiento científico desde una perspectiva sensible, visual y
              participativa. Creemos que sembrar la curiosidad desde edades tempranas
              es clave para formar futuras generaciones con pensamiento crítico, amor
              por el entorno natural y capacidad para imaginar otros mundos posibles.
            </p>
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ButtonLink>Más Información</ButtonLink>
            </div> */}
            <img className="Herramienta" src="/Images/Herramienta.png" alt="Herramienta" />
          </div>

        </section>
      </div>
    </div>
  );
}

export default HomePage;