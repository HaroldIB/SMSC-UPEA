import React from "react";
import { Link } from "react-router-dom";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";

function Supnavbar() {
  const hoy = new Date();
  const dia = hoy.toLocaleString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="text-sm ">
      <nav className="bg-slate-300 flex justify-between">
        <div>{dia}</div>
        <ul className="flex justify-between gap-2">
          <li className="underline">
            <Link to="/login">Ingresar</Link>
          </li>
          <li className="flex justify-between">
            <a href="https://www.facebook.com/ElAltoSeguridadCiudadana">
              <FacebookIcon size={25} round />
            </a>
            <a href="https://www.facebook.com/ElAltoSeguridadCiudadana">
              <TwitterIcon size={25} round />
            </a>
            <a href="https://www.facebook.com/ElAltoSeguridadCiudadana">
              <WhatsappIcon size={25} round />
            </a>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
}

export default Supnavbar;
