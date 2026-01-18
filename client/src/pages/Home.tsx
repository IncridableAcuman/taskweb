import TaskSheet from "@/tasks/ui/components/task-form";
import TaskList from "@/tasks/ui/pages/TaskList";
import ViewTask from "@/tasks/ui/components/view-task";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type ITask from "@/tasks/interface/task.interface";

const Home = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [view, setView] = useState(false);
  const [selectedTask, setSelectedTask] = useState<ITask | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <h1 className="text-xl md:text-2xl font-semibold">Todo List</h1>


      <div className="pt-5">
        <TaskList
          onSelectTask={(task) => {
            setSelectedTask(task);
            setView(true);
          }}
        />
      </div>

      <ViewTask
        view={view}
        setView={setView}
        task={selectedTask}
      />

      <div className="fixed bottom-5 right-3">
        <TaskSheet sheetOpen={sheetOpen} setSheetOpen={setSheetOpen} />
      </div>
    </>
  );
};

export default Home;
