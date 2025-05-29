import './Escaner.css';
import ButtonLink from './Components/ButtonLink';

function Escaner() {
    return (
        <div className="Escaner">
            <div className="Banner-Escaner">
            </div>
            <div className="Title">
                <h2>Encuentra</h2>
                <h3>los </h3>
                <h1>Fósiles</h1>
            </div>
            <div className="container">
                <div className="centered">
                    <div>
                        <p>En esta sección deberás encontrar los fósiles de plantas prehistóricas escondidos en la arena.</p>
                    </div>
                    <div style={{ width: "100%" }}>
                      <div style={{ position: "relative", paddingBottom: "56.25%", paddingTop: 0, height: 0 }}>
                        <iframe
                          title="¡Es hora de explorar! Paleobotánica"
                          frameBorder="0"
                          width="1200"
                          height="675"
                          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                          src="https://view.genially.com/681258c2b23d16ccfac3a5ab"
                          allowFullScreen={true}
                          scrolling="yes"
                          allow="autoplay; fullscreen"
                        ></iframe>
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

export default Escaner;