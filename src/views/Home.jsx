import "./Home.css";
import Animacion from "./Animacion";
import linsiji from "../assets/img/chica.jpg";

const Home = () => {
  return (
    <>
      <div className="animated-element">
        <h1>Welcome! I'm Yoselin Silva Jimenez (Linsiji) &&</h1>
      </div>
      <div className="img-animacion">
        <img src={linsiji} alt="chica" className="lin" />
        <h1 className="texto-alineado">
          <Animacion />
        </h1>
      </div>
    </>
  );
};
export default Home;
