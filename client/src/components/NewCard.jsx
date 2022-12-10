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
      <div className="block gap-x-1">
        <button
          className="bg-blue-500 px-2 py-1 text-white"
          onClick={() => navigate("/tasks")}
        >
          Leer mas...
        </button>
      </div>
    </div>
  );
}

export default NewCard;
