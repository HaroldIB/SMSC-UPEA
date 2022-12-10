import React from "react";
import { Form, Formik } from "formik";
import { useNews } from "../context/NewProvider";
import { useParams, useNavigate } from "react-router-dom";
import NewCardUser from "../components/NewCardUser";
import { useEffect, useState } from "react";

function NewForm() {
  const { news, loadNews, createNews, getNew, updateNew } = useNews();

  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const loadNews = async () => {
      if (params.id) {
        const news = await getNew(params.id);
        setNews({
          title: news.title,
          urlImage: news.urlImage,
          content: news.content,
        });
      }
    };
    loadNews();
  }, []);

  const [niw, setNews] = useState({
    title: "",
    urlImage: "",
    content: "",
  });

  function renderMain() {
    if (news.lenght === 0) return <h1>No hay publicaciones aún</h1>;
    return news.map((niw) => <NewCardUser niw={niw} key={niw.id} />);
  }

  return (
    <div>
      <div>
        <h1>INSERTE SU PUBLICACIÓN</h1>
        <Formik
          initialValues={niw}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            console.log(values);
            if (params.id) {
              await updateNew(params.id, values);
              navigate("/newform");
            } else {
              await createNews(values);
              navigate("/newform");
            }

            setNews({
              title: "",
              urlImage: "",
              content: "",
            });
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form
              onSubmit={handleSubmit}
              className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
            >
              <h1 className="text-xl font-bold uppercase text-center">
                {params.id
                  ? "EDITAR LA NOTICIA PARA PUBLICAR"
                  : "CREAR UNA NUEVA NOTICIAS PARA PUBLICAR"}
              </h1>
              <label className="block"> TÍTULO</label>
              <input
                type="text"
                name="title"
                placeholder="Escribe un Título"
                className="px-2 py-1 rounded-sm w-full"
                onChange={handleChange}
                value={values.title}
              />
              <label className="block"> IMAGEN</label>
              <input
                type="text"
                name="urlImage"
                placeholder="Ingrese URL de la imagen"
                className="px-2 py-1 rounded-sm w-full"
                onChange={handleChange}
                value={values.urlImage}
              />
              <label className="block"> CONTENIDO DE LA NOTICIA</label>
              <textarea
                name="content"
                rows="6"
                placeholder="Escribe el contenido"
                className="px-2 py-1 rounded-sm w-full"
                onChange={handleChange}
                value={values.content}
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
              >
                {isSubmitting ? "Publicando" : "Publicar"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div>
        <h1 className="text-white font-bold text-center uppercase">
          Secretaría Municipal de Seguridad Ciudadana
        </h1>
        <div className="grid grid-cols-3 gap-2">{renderMain()}</div>
      </div>
    </div>
  );
}

export default NewForm;
