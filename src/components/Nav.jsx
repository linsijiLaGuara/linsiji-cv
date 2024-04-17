import { NavLink } from "react-router-dom";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faUser,
  faBriefcase,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  return (
    <nav className="navbar">
      <h3 className="spanclass">Linsiji</h3>
      <div className="nav-links">
        <NavLink exact to="/" activeClassName="active" className="nav-link">
          <FontAwesomeIcon icon={faHouseUser} /> Home
        </NavLink>

        <NavLink to="/about" activeClassName="active" className="nav-link">
          <FontAwesomeIcon icon={faUser} /> About
        </NavLink>

        <NavLink to="/resume" activeClassName="active" className="nav-link">
          <FontAwesomeIcon icon={faFileInvoice} /> Resume
        </NavLink>

        <NavLink to="/portafolio" activeClassName="active" className="nav-link">
          <FontAwesomeIcon icon={faBriefcase} /> Portafolio
        </NavLink>
      </div>
    </nav>
  );
}
