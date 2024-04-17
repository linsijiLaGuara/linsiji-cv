import Card from "react-bootstrap/Card";
import miniatura from "../assets/img/miniatura.png";

function About() {
  return (
    <>
      <div className="container-todo">
        <h1 className="text-center mb-4">
          Licenciada en Educación con Mención en Informática
        </h1>
        <div className="container">
          <div>
            <Card className="img-content">
              <Card.Img variant="top" src={miniatura} />
            </Card>
          </div>

          <div>
            <p>
              Soy una apasionada desarrolladora con 5 años de experiencia sólida
              en el desarrollo y gestión de API utilizando IBM API Connect,
              especializada en el sector financiero. Mi dedicación a la creación
              de soluciones tecnológicas innovadoras y mi profundo conocimiento
              en esta plataforma me han permitido destacar en la entrega de
              proyectos exitosos en un entorno altamente regulado y desafiante.
            </p>
          </div>
        </div>
        <div>
          <h1>Habilidades</h1>
        </div>
      </div>
    </>
  );
}

export default About;
