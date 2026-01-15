import TaskSheet from "@/tasks/ui/components/task-form";
import TaskRadioGroup from "@/tasks/ui/components/radio-group"
import TaskList from "@/tasks/ui/pages/TaskList"
import { useEffect, useState } from "react"
import ViewTask from "@/tasks/ui/components/view-task";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [sheetOpen,setSheetOpen] = useState(false);
  const [active, setActive] = useState<"list" | "panel">("list");
  const [view,setView]=useState(false);
  const navigate = useNavigate();

    useEffect(()=>{
      if(!localStorage.getItem("accessToken")){
        navigate("/login");
      }
    },[navigate]);
  return (
    <>
      <h1 className="text-xl md:text-2xl font-semibold">Todo List</h1>
      <TaskRadioGroup active={active} setActive={setActive} />
      <div className="pt-5">
        <TaskList view={view} setView={setView} />
      </div>
      <div className="">
        <ViewTask view={view} setView={setView} />
      </div>
      <div className="fixed bottom-5 right-3">
        <TaskSheet sheetOpen={sheetOpen} setSheetOpen={setSheetOpen} />
      </div>
    </>
  )
}

export default Home