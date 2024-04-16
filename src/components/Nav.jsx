import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navbar flex gap-4 items-center justify-end">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active font-bold uppercase" : "font-bold uppercase"
        }
      >
        Home
      </NavLink>


      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "active font-bold uppercase" : "font-bold uppercase"
        }
      >
        About
      </NavLink>

      <NavLink
        to="/resume"
        className={({ isActive }) =>
          isActive ? "active font-bold uppercase" : "font-bold uppercase"
        }
      >
        Resume
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          isActive ? "active font-bold uppercase" : "font-bold uppercase"
        }
      >
        Portfolio
      </NavLink>
    </nav>
  );
}