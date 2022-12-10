import { Link } from "react-router-dom";
import "../logo.css";

function Logo() {
  return (
    <div className="bg-slate-600">
      <h2 className="text-white flex justify-center">SECRETARIA MUNICIPAL DE SEGURIDAD CIUDADANA DEL GOBIERNO AUTÓNOMO MUNICIPAL DE EL ALTO</h2>
      <header className="showcase">
        <Link to="/"></Link>
      </header>
    </div>
  );
}

export default Logo;
