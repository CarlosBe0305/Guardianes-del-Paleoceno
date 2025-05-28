import './LibroExplorador.css';
import ButtonLink from './Components/ButtonLink';

function LibroExplorador() {
    return (
        <div className="Escaner">
            <div className="Banner-Libro">
            </div>
            <div className="Title">
                <h2>Libro</h2>
                <h3>del </h3>
                <h1>Explorador</h1>
            </div>
            <div className="container">
                <div>
                    <div>
                        <p>En esta sección podrás ver la historia de fósiles de plantas prehistóricas.</p>
                    </div>
                    <div style={{ position: "relative", paddingTop: "max(60%,324px)", width: "100%", height: 0 }}>
                        <iframe
                            style={{ position: "absolute", border: "none", width: "100%", height: "100%", left: 0, top: 0 }}
                            src="https://online.fliphtml5.com/vcnva/ymaa/"
                            seamless="seamless"
                            scrolling="no"
                            frameBorder="0"
                            allowTransparency="true"
                            allowFullScreen={true}
                            title="Libro de fósiles"
                        ></iframe>
                    </div>
                </div>
                <br />
                <ButtonLink href="/" className="btn btn-primary">Volver a la página principal</ButtonLink>
                <br />
            </div>
        </div>
    );
}

export default LibroExplorador;