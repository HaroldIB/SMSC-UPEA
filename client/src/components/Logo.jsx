import { Link } from "react-router-dom";
import "../logo.css";

function Logo() {
  return (
    <header className="showcase">
      <Link to="/">
        <h2>-*-*Secreatría Municipal de Seguridad Ciudadana*-*-</h2>
      </Link>
    </header>
  );
}

export default Logo;
