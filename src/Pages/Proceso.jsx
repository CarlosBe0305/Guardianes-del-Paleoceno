import './Proceso.css';
import React, { useState } from "react";

function Proceso() {
  const [hovered, setHovered] = useState(null);

  const etapas = [
    { 
      key: "Etapa1", 
      title: "Etapa 1: Planeación e Investigación", 
      desc: "La primera etapa del proyecto comenzó con una reunión clave con el cliente, representado por la Alianza Biofilia, quien nos asignó el reto de diseñar una experiencia museística que complementara la exposición que van a tener, por eso decidimos hacer una experiencia centrada en la paleobotánica para niños de entre 7 y 10 años. Durante este encuentro se definieron los objetivos generales del proyecto, el enfoque pedagógico y las necesidades del usuario final. Paralelamente, se realizaron sesiones con usuarios reales para observar directamente su comportamiento, intereses y reacciones frente a temáticas científicas. Finalmente, se llevó a cabo un benchmark de experiencias museísticas nacionales e internacionales, enfocadas en aprendizaje infantil, gamificación y divulgación científica. Este proceso permitió establecer una base sólida para el desarrollo del proyecto." 
    },
    { 
      key: "Etapa2", 
      title: "Etapa 2: Definición de Requisitos", 
      desc: "Con la información recopilada, se procedió a definir los requisitos específicos del proyecto. Se construyeron escenarios de uso que describen las condiciones en las que los niños interactuarán con la experiencia, considerando la duración de las actividades, la necesidad de acompañamiento y el nivel de comprensión. Se elaboraron arquetipos de usuarios que representaran distintas capacidades cognitivas y niveles de lectura. Posteriormente, se desarrolló una clasificación de contenidos dividiendo la experiencia en fases: introducción, exploración, reconstrucción y ubicación temporal. También se realizó una auditoría de contenidos para adaptar los conceptos paleobotánicos a un lenguaje claro y accesible. Finalmente, se identificaron los requerimientos técnicos y funcionales necesarios para implementar actividades interactivas, materiales manipulables, bitácoras físicas y un sitio web complementario." 
    },
    { 
      key: "Etapa3", 
      title: "Etapa 3: Diseño y Validación", 
      desc: "Durante esta fase se inició el diseño de las estaciones del recorrido. Se prototiparon tres bases principales: exploración (pantalla táctil con juego de búsqueda de fósiles), reconstrucción (rompecabezas físicos hechos en arcilla) y ubicación temporal (línea de tiempo digital con narración en audio). Adicionalmente, se diseñó una etapa de introducción guiada por el personaje DinoPablo, quien entrega las bitácoras y contextualiza la experiencia. La validación se llevó a cabo mediante prototipado colaborativo y observación directa con niños. Se realizaron paseos cognitivos para evaluar la navegación por las actividades y evaluaciones heurísticas que permitieron identificar aspectos a mejorar" 
    },
    { 
      key: "Etapa4", 
      title: "Etapa 4: Implementación", 
      desc: "Una vez definidas las actividades finales, se procedió a la implementación. En esta etapa, se desarrolló el sitio web oficial del proyecto, que funciona como una plataforma de acompañamiento digital y difusión. Su estructura está compuesta por secciones dedicadas a explicar el propósito del proyecto, documentar el proceso metodológico, presentar los prototipos funcionales e introducir al equipo creador. El diseño del sitio web se centró en garantizar una experiencia clara y amigable tanto para adultos como para niños, usando una interfaz responsiva, lenguaje sencillo, íconos grandes, ilustraciones y recursos gráficos adecuados. Las bases físicas fueron diseñadas con materiales seguros y adecuados para la manipulación infantil, mientras que las pantallas táctiles fueron configuradas para mostrar interacciones simples y aleatorias. La arquitectura de contenidos web se implementó siguiendo jerarquías claras para facilitar la navegación y se previó la escalabilidad de la plataforma para futuras versiones o nuevas experiencias educativas." 
    },
    { 
      key: "Etapa5", 
      title: "Etapa 5", 
      desc: "Descripción de la etapa 5 al hacer hover" 
    },
  ];

  return (
    <div className="Proceso-body">
      
      <div className="Title-Proceso">
          <h1>El Proceso</h1>
        </div>
      <div className="Proceso">
        <div className="Proceso-Content">
          <p>
            El Proceso “Guardianes del Paleoceno” nació como parte de una iniciativa educativa e inmersiva desarrollada dentro del marco de la Alianza Biofilia, una red que busca fomentar la divulgación, el aprendizaje y la investigación sobre la biodiversidad a través de experiencias significativas en espacios museales y centros de ciencia. Este Proceso, dirigido a niños entre 7 y 10 años, tenía como objetivo crear una experiencia lúdica, interactiva y sensorial que les permitiera comprender el pasado evolutivo de las plantas, especialmente durante el periodo Paleoceno.
          </p>
          <section className="Etapas">
            <h2>Etapas</h2>
            <div className="Etapas-Content">
              {etapas.map((etapa, idx) => (
                <div
                  key={etapa.key}
                  className={etapa.key}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    minHeight: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <p
                    style={{
                      width: "90%",
                      textAlign: "center",
                      margin: 0,
                      fontSize: "0.95rem",
                      zIndex: 1,
                      opacity: hovered === idx ? 1 : 0,
                      transition: "opacity 0.2s",
                      pointerEvents: hovered === idx ? "auto" : "none",
                    }}
                  >
                    {etapa.desc}
                  </p>
                  <h3
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      margin: 0,
                      width: "90%",
                      textAlign: "center",
                      opacity: hovered === idx ? 0 : 1,
                      pointerEvents: "none",
                      transition: "opacity 0.2s",
                      zIndex: 2,
                    }}
                  >
                    {etapa.title}
                  </h3>
                </div>
              ))}
            </div>
          </section>
          <section className="Info">
            <div className="Info-Text">
              <h4>Integración de diseño e ilustración</h4>
              <p>
                Uno de los aspectos más destacados del proceso fue la producción visual. Se definió un estilo gráfico plano, amigable y colorido, con personajes caricaturescos, tipografías redondeadas y formas orgánicas que evocan la naturaleza. Este lenguaje visual se mantuvo coherente en toda la comunicación del proyecto: desde la bitácora y los pósters informativos hasta los elementos digitales de la interfaz de la máquina del tiempo.
Además, se diseñaron personajes únicos como Pablo el Dinosaurio y una representación del mapa de misiones, lo que aportó identidad propia al proyecto y permitió que los niños se sintieran parte de una gran aventura.              </p>
            </div>
            <div className="Info-Image">
              <img src="/Images/Fósiles.png" alt="Fósiles" />

            </div>
          </section>
          <section className="Info">
            <div className="Info-Image">
              <img src="/Images/Divulgación.png" alt="Divulgación Científica" />

            </div>
            <div className="Info-Text">
              <h4>Vinculación con la Alianza Biofilia</h4>
              <p>
                La experiencia “Guardianes del Paleoceno” se construyó alineada con los objetivos de la Alianza Biofilia: generar herramientas de divulgación científica accesibles y de alto impacto para el público infantil. El proyecto se integró dentro del portafolio de actividades itinerantes de la alianza, permitiendo su posible replicación en otros museos, instituciones educativas y centros de ciencia del país.</p>
            </div>
            
          </section>
          <section className="Info">
            <div className="Info-Text">
              <h4>Conclusión</h4>
              <p>Este proceso ha sido una muestra del potencial que tiene la combinación entre diseño, narrativa, tecnología y ciencia para crear experiencias significativas de aprendizaje. “Guardianes del Paleoceno” no solo enseña sobre fósiles y plantas, sino que despierta la curiosidad, la imaginación y el pensamiento crítico en los niños, formándolos como pequeños científicos, guardianes del pasado y futuros defensores del planeta.</p>
            </div>
            
          </section>
        </div>
      </div>
    </div>
  );
}

export default Proceso;