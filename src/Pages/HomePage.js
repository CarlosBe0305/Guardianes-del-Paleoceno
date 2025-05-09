import React from 'react';
import './Components/styles/NavFAB.css';
import './HomePage.css';
import ButtonLink from './Components/ButtonLink';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Title">
          <h2>Guardianes</h2>
          <h3>del </h3>
          <h1>PALEOCENO</h1>
          <div className="Dinosaurios-Image">
            <img src="/images/Dinosaurios.png" alt="Dinosaurios"/>
          </div>
        </div>
      </header>
      <div className="App-body">
        <section className="Info d-flex flex-nowrap">
          <div className="Info-Text">
            <h4>Alianza Biofilia</h4>
            <p>Biofilia es una red de colaboración conformada
              por museos, universidades, centros de ciencia e
              instituciones dedicadas a la divulgación del
              conocimiento natural en Colombia. Su objetivo es
              fortalecer el aprendizaje, la investigación y la
              conexión de las personas con la biodiversidad del
              país mediante experiencias educativas, científicas
              y culturales.</p>
            <ButtonLink title="Conoce más" link="https://example.com" />
          </div>
          <div className="Info-Image">
            <img src="/images/Alianza-Biofilia.jpeg" alt="Alianza Biofilia"/>
          </div>
        </section>
        <section className="Info">
          <div className="Info-Image">
            <img src="/images/Alianza-Biofilia.jpeg" alt="Alianza Biofilia"/>
          </div>
          <div className="Info-Text">
            <br/><br/><br/><br/>
            <h4>Nuestro Proyecto</h4>
            <p>Guardianes del paleoceno es una experiencia educativa<br/>
            inmersiva pensada para niñas y niños entre los 7 y 10 años, <br/>
            que los invita a conocerel Paleoceno una era fascinante  <br/>
            posterior a la extinción de los dinosaurios a través de una<br/>
            serie de estaciones interactivas y narrativas. El objetivo<br/>
            es despertar la curiosidad científica desde la infancia<br/>
            mediante el juego, la exploración táctil la imaginación,<br/>
            permitiendo que el aprendizaje surja de manera natural y <br/>
            memorable mientras recorren el ecosistema prehistórico <br/>
            guiado por un personaje lúdico.<br/>
              </p>
            <ButtonLink title="Conoce más" link="https://example.com" />
          </div>
          
        </section>
      </div>
      
    </div>
  );
}

export default HomePage;