import { useEffect } from "react";
import NewCard from "../components/NewCard";
import { useNews } from "../context/NewProvider";

function NewsPage() {
  const { news, loadNews } = useNews();
  useEffect(() => {
    loadNews();
  }, []);
  function renderMain() {
    if (news.lenght === 0) return <h1>No hay publicaciones aún</h1>;
    return news.map((niw) => <NewCard niw={niw} key={niw.id} />);
  }
  return (
    <div>
      <h1 className="text-white font-bold text-center uppercase">
        Secretaría Municipal de Seguridad Ciudadana
      </h1>
      <div className="grid grid-cols-2  gap-2">{renderMain()}</div>
    </div>
  );
}

export default NewsPage;
