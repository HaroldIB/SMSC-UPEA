import { Route, Routes } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import NewsPage from "./pages/NewsPage";
import TaskForm from "./pages/TaskForm";
import NotFound from "./pages/NotFound";
import LoginForm from "./pages/LoginForm";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Supnavbar from "./components/Supnavbar";
import Footer from "./components/Footer";
import Facebook from "./components/Facebook";
import { TaskContextProvider } from "./context/TaskProvider";
import { NewContextProvider } from "./context/NewProvider";
import { UserContextProvider } from "./context/UserProvider";
import NewForm from "./pages/NewForm";
import UserPage from "./pages/UserPage";
import "./App.css"
function App() {
  return (
    <div className="bg-slate-900 h-max">
      <Supnavbar />
      <Logo />
      <Navbar />
      <div className="card-main">
        <div className="container py-4 px-2">
          <UserContextProvider>
            <NewContextProvider>
              <TaskContextProvider>
                <Routes>
                  <Route path="/" element={<NewsPage />} />
                  <Route path="/userpage" element={<UserPage />} />
                  <Route path="/tasks" element={<TasksPage />} />
                  <Route path="/form" element={<TaskForm />} />
                  <Route path="/newform" element={<NewForm />} />
                  <Route path="/login" element={<LoginForm />} />
                  <Route path="/edit/:id" element={<TaskForm />} />
                  <Route path="/useredit/:id" element={<NewForm />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </TaskContextProvider>
            </NewContextProvider>
          </UserContextProvider>
        </div>
        <div className="px-1 py-5">
          <Facebook />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
