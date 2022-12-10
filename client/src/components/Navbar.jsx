import { useState } from "react";
import { Link } from "react-router-dom";
import "../navbar.css";
function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");
    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };
  return (
    <nav className="nav bg-slate-800 flex justify-between px-20 py-1">
      <Link to="/" className="nav__brand text-white font-bold">
        <img src="/gamea.png" className="object-contain  h-15 w-20" alt="" />
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link
            to="/"
            className="nav__link bg-slate-600 text-white px-2 py-1 rounded-sm"
          >
            INICIO
          </Link>
        </li>

        <li className="nav__item">
          <Link
            to="/form"
            className="nav__link bg-slate-600 text-white px-2 py-1 rounded-sm"
          >
            CONTACTOS
          </Link>
        </li>
        <li className="nav__item">

        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
