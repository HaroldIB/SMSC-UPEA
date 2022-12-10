import { useNews } from "../context/NewProvider";
import { useNavigate } from "react-router-dom";

function NewCard({ niw }) {
  const { deleteNew } = useNews();
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
      <div className="block gap-x-1">
        <button
          className="bg-red-500 px-2 py-1 text-white"
          onClick={() => deleteNew(niw.id)}
        >
          ELIMINAR
        </button>
        <button
          className="bg-slate-800 px-2 py-1 text-white"
          onClick={() => navigate(`/useredit/${niw.id}`)}
        >
          EDITAR
        </button>
      </div>
    </div>
  );
}

export default NewCard;
