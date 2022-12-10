import { Form, Formik } from "formik";
import { useUsers } from "../context/UserProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function LoginForm() {
  const { getUser } = useUsers();

  const [user, setUser] = useState({
    user: "",
    pass: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      if (params.id) {
        const user = await getUser(params.id);
        setUser({
          user: user.user,
          pass: user.pass,
        });
      }
    };
    loadUser();
  }, []);

  return (
    <div className="mx-auto">
      <Formik
        initialValues={user}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          navigate("/form");
          setUser({
            user: "",
            pass: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              INGRESAR
            </h1>
            <label className="block"> USUARIO</label>
            <input
              type="text"
              name="user"
              placeholder="Ingrese su Usuario"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.user}
            />
            <label className="block">CONTRASEÑA</label>
            <input
              type="password"
              name="pass"
              placeholder="Ingrese su Contraseña"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.pass}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
            >
              {isSubmitting ? "Ingresando" : "Ingresar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
