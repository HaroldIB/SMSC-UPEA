import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();
  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1 className="text-3xl text-white font-bold">No hay publicaciones aún!!</h1>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center">PUBLICACIONES</h1>
      <div className="grid grid-cols-2 gap-2">{renderMain()}</div>
    </div>
  );
}

export default TasksPage;
