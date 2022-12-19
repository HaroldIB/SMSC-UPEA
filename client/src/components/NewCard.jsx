import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
import { useNavigate } from "react-router-dom";

function NewCard({ niw }) {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-400 bg-opacity-80 rounded-md p-4">
      <header className="justify-between">
        <h2 className="text-sm font-bold text-center uppercase">{niw.title}</h2>
      </header>
      <div className="flex justify-center">
        <img src={niw.urlImage} className="w-fit" alt="Cargando Imagen..." />
      </div>
      <p className="text-xs">{niw.content}</p>
      <div className="gap-x-1 flex justify-end">
        <a href="https://www.facebook.com/ElAltoSeguridadCiudadana">
          <FacebookIcon size={50} round />
        </a>
        <a href="https://twitter.com/?lang=es">
          <TwitterIcon size={50} round />
        </a>
      </div>
    </div>
  );
}

export default NewCard;
