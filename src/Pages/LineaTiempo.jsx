import React, { useRef, useEffect, useState } from "react";
import './LineaTiempo.css';
import ButtonLink from './Components/ButtonLink';

function LineaTiempo() {
  const scrollImgRef = useRef(null);
  const audioRef = useRef(null);
  const [activeBlock, setActiveBlock] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Define los bloques: scrollLeft en px y segundos del audio
  const blocks = [
    { start: 0, end: 1500, audioStart: 0, audioEnd: 12 },
    { start: 1451, end: 2900, audioStart: 12, audioEnd: 35.5 },
    { start: 2901, end: 5900, audioStart: 35.5, audioEnd: 58.5 },
    { start: 5801, end: 17500, audioStart: 58.5, audioEnd: 80.5 }
  ];

  useEffect(() => {
    function handleScroll() {
      const scrollLeft = scrollImgRef.current.scrollLeft;
      const blockIndex = blocks.findIndex(
        b => scrollLeft >= b.start && scrollLeft <= b.end
      );
      if (blockIndex !== activeBlock) {
        setActiveBlock(blockIndex);
      }
    }
    const el = scrollImgRef.current;
    if (el) el.addEventListener('scroll', handleScroll);
    return () => {
      if (el) el.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, [activeBlock]);

  // Controla el audio según el bloque activo
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && isFullscreen && activeBlock !== null && blocks[activeBlock]) {
      audio.currentTime = blocks[activeBlock].audioStart;
      audio.play();

      const onTimeUpdate = () => {
        if (audio.currentTime >= blocks[activeBlock].audioEnd) {
          audio.pause();
        }
      };
      audio.addEventListener('timeupdate', onTimeUpdate);
      return () => audio.removeEventListener('timeupdate', onTimeUpdate);
    } else if (audio) {
      audio.pause();
    }
    // eslint-disable-next-line
  }, [activeBlock, isFullscreen]);

  useEffect(() => {
    function handleFullscreenChange() {
      const fullscreen =
        document.fullscreenElement === scrollImgRef.current ||
        document.webkitFullscreenElement === scrollImgRef.current ||
        document.msFullscreenElement === scrollImgRef.current;
      setIsFullscreen(fullscreen);

      if (audioRef.current) {
        if (fullscreen) {
          if (activeBlock !== null && blocks[activeBlock]) {
            audioRef.current.currentTime = blocks[activeBlock].audioStart;
            audioRef.current.play();
          }
        } else {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      }
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, [activeBlock, blocks]);

  // Pantalla completa (igual que antes)
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
          <div className="LineaTiempo-centro">
            <div className="scroll-x-img" ref={scrollImgRef}>
              <img src="/Images/Linea del tiempo.png" alt="Línea de tiempo" className="img-LineaTiempo" />
            </div>
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
      <audio ref={audioRef} src="/Audio/De_plantas_a_piedras__Audio.mp3" preload="auto" />
    </div>
  );
}

export default LineaTiempo;