import { Link } from "react-router-dom";
import "../logo.css";

function Logo() {
  return (
    <div className="bg-slate-600">
      <div className="Iam flex justify-centerst">
        <p>GAMEA</p>
        <b>
          <div class="innerIam">
            Secretaría
            <br />
            Municipal
            <br />
            de Seguridad
            <br />
            Ciudadana
            <br />
            Secretaría Municipal de Seguridad Ciudadana
          </div>
        </b>
      </div>
      <header className="showcase">
        <Link to="/"></Link>
      </header>
    </div>
  );
}

export default Logo;
