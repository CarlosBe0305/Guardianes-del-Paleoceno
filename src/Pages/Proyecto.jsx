import './Proyecto.css';

function Proyecto() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Banner-Proyecto">
        </div>
        <div className="Title-Proyecto">
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
          <section className="Info">
            <div className="Info-Text contenedores-bg">
              <img className="ContenedoresProyecto-bg" src="/Images/ContenedoresProyecto.png" alt="" />
              <h4>Objetivo</h4>
              <p>
                Diseñar una experiencia interactiva para el segmento de Paleobotánica dentro de Biofilia Viajera, dirigida a un público infantil entre los 7 y 10 años, que despierte su curiosidad y estimule su aprendizaje mediante diferentes recursos acorde a su nivel cognitivo que promueva la interacción autónoma y colaboración entre niños y adultos, desde un enfoque accesible, participativo y centrado en los mismos usuarios.
              </p>
            </div>
            <div className="Info-Image">
              <img src="/Images/Científico.png" alt="DinoPablo" />

            </div>
          </section>
          <section className="Info">
            <div className="Info-Image">
              <img src="/Images/Explorador.png" alt="DinoPablo" />
            </div>
            <div className="Info-Text contenedores-bg">
              <img className="ContenedoresProyecto-bg" src="/Images/ContenedoresProyecto.png" alt="" />
              <h4>¿Qué lo hace único?</h4>
              <p>
                Combina herramientas digitales y análogas para un aprendizaje multisensorial. Integra narrativa, juego y ciencia en una experiencia coherente y significativa. Está basada en el diseño centrado en el usuario, adaptado a las capacidades cognitivas e intereses de la niñez. Fue diseñada y validada en campo con niños reales a través de prototipos funcionales.              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default Proyecto;