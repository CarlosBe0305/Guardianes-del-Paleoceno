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
        </div>
        <section className="Alianza-Biofilia">
          <div className="Alianza-Biofilia-Text">
            <br/><br/><br/><br/>
            <h4>Alianza Biofilia</h4>
            <p>Biofilia es una red de colaboración conformada<br/>
              por museos, universidades, centros de ciencia e<br/>
              instituciones dedicadas a la divulgación del<br/>
              conocimiento natural en Colombia. Su objetivo es<br/>
              fortalecer el aprendizaje, la investigación y la<br/>
              conexión de las personas con la biodiversidad del<br/>
              país mediante experiencias educativas, científicas<br/>
              y culturales.</p>
            <ButtonLink title="Conoce más" link="https://example.com" />
          </div>
          <div className="Alianza-Biofilia-Image"></div>
        </section>
        <section className="Nuestro-Proyecto">
          <div className="Nuestro-Proyecto-Text">
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
          <div className="Alianza-Biofilia-Image"></div>
        </section>
      </header>
    </div>
  );
}

export default HomePage;