import React from "react";
import { Link } from "react-router-dom";

function NewForm() {
  return (
    <div className="text-sm ">
      <div>
        <img src="/gamea.png" alt="" />
      </div>
      <div>
        <ul className="flex justify-between gap-2">
          <li className="underline">
            <button
              type="submit"
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
            >
              <Link
                to="/newform"
                className="nav__link bg-slate-600 text-white px-2 py-1 rounded-sm"
              >
                CREAR UNA NUEVA NOTA
              </Link>
            </button>
          </li>
          <li className="flex justify-between">
            <a href="https://www.facebook.com/ElAltoSeguridadCiudadana">
              <button
                type="submit"
                className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
              >
                <Link
                  to="/tasks"
                  className="nav__link bg-slate-600 text-white px-2 py-1 rounded-sm"
                >
                  VER RECLAMOS Y CONSULTAS
                </Link>
              </button>
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
}

export default NewForm;
