import type ITask from "@/tasks/interface/task.interface";
import type React from "react";

export default interface TaskContextType {
    tasks: ITask[],
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
    taskList: () => Promise<void>;
}