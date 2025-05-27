import React, { useRef } from "react";
import './LineaTiempo.css';
import ButtonLink from './Components/ButtonLink';

function LineaTiempo() {
  const scrollImgRef = useRef(null);

  const handleFullscreen = () => {
    const el = scrollImgRef.current;
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  };

    return (
        <div className="LineaTiempo">
            <div className="Banner-Linea">
            </div>
            <div className="Title">
                <h2>Línea</h2>
                <h3>de </h3>
                <h1>Tiempo</h1>
            </div>
            <div className="container">
                <div className="">
                    <div>
                        <p>En esta sección podrás ver la historia de fósiles de plantas prehistóricas.</p>
                    </div>
                    <div className="scroll-x-img" ref={scrollImgRef}>
                        <img src="/Images/Linea del tiempo.png" alt="Línea de tiempo" className="img-LineaTiempo" />
                        <div className="overlay-linea">
                            <ButtonLink className="overlay-btn" onClick={handleFullscreen}>
                              Ver en pantalla completa
                            </ButtonLink>
                        </div>
                    </div>
                </div>
                <br />
                <ButtonLink href="/" className="btn btn-primary">Volver a la página principal</ButtonLink>
                <br />
            </div>
        </div>
    );
}

export default LineaTiempo;