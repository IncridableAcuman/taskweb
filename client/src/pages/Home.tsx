import TaskRadioGroup from "@/tasks/ui/components/radio-group"
import TaskSheet from "@/tasks/ui/components/sheet"
import TaskList from "@/tasks/ui/pages/TaskList"
import { useState } from "react"


const Home = () => {
  const [sheetOpen,setSheetOpen] = useState(false);
  const [active, setActive] = useState<"list" | "panel">("list");
  return (
    <>
      <h1 className="text-xl md:text-2xl font-semibold">Todo List</h1>
      <TaskRadioGroup active={active} setActive={setActive} />
      <div className="pt-5">
        <TaskList sheetOpen={setSheetOpen} />
      </div>
      <div className="fixed bottom-5 right-3">
        <TaskSheet sheetOpen={sheetOpen} setSheetOpen={setSheetOpen} />
      </div>
    </>
  )
}

export default Home