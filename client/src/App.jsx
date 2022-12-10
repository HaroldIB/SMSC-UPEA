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

function App() {
  return (
    <div className="bg-slate-900 h-max">
      <Supnavbar />
      <Logo />
      <Navbar />
      <div className="flex">
        <div className="container max-width py-4 px-20">
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
        <Facebook />
      </div>
      <Footer />
    </div>
  );
}

export default App;
