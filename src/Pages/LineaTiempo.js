import React, { useRef } from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
                <div className="row">
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
                <ButtonLink href="/" className="btn btn-primary">Volver a la página principal</ButtonLink>
            </div>
        </div>
    );
}

export default LineaTiempo;