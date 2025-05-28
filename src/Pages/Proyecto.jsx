import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Proyecto.css';

function Proyecto() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Title">
          <h2>Nuestro</h2>
          <h1>Proyecto</h1>
        </div>
      </header>
      <div className="Proyecto">
        <div className="Proyecto-Content">
          <p>
            Guardianes del Paleoceno es una experiencia museística diseñada para niños y niñas entre los 7 y 10 años, que
            busca despertar su curiosidad por la naturaleza a través del juego, la tecnología y la exploración sensorial.
            Guiados por Pablo el Dinosaurio, los participantes recorren cuatro estaciones interactivas donde excavan fósiles,
            reconstruyen plantas prehistóricas, viajan por una línea del tiempo digital y reflexionan sobre la historia
            evolutiva del planeta.
          </p>
          <p>
            Este proyecto combina diseño centrado en el usuario, narrativa lúdica y herramientas analógicas y digitales para
            fortalecer el vínculo emocional entre los niños y el mundo natural. Inspirado en el enfoque de la Alianza Biofilia,
            busca sembrar en los más pequeños el deseo de conocer, cuidar y compartir los secretos de la vida en la Tierra.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Proyecto;