import { useEffect } from "react";
import NewCard from "../components/NewCard";
import { useNews } from "../context/NewProvider";
import "../News.css"


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
    <div className="w-auto px-2 py-2">
      <h1 className="text-white font-bold text-center uppercase">
        Secretaría Municipal de Seguridad Ciudadana
      </h1>
      <div className="news-card ">{renderMain()}</div>
    </div>
  );
}

export default NewsPage;
