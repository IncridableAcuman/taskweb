import { UseTasks } from "@/provider/TaskProvider";
import type ITask from "@/tasks/interface/task.interface";

interface TaskListProps {
    onSelectTask: (task: ITask) => void;
}

const TaskList = ({ onSelectTask }: TaskListProps) => {
    const { tasks } = UseTasks();

    return (
        <div className="space-y-3">
            {tasks.map(task => (
                <div
                    key={task.id}
                    onClick={() => onSelectTask(task)}
                    className="cursor-pointer rounded-md border p-4 hover:shadow"
                >
                    <div className="flex items-center justify-between">
                        <div className="">
                            <h3 className="font-medium">{task.title}</h3>
                            
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="bg-sky-500 text-white text-xs p-1.5 rounded">{task.status.slice(0, 1).concat(task.status.slice(1, task.status.length).toLowerCase())}</p>
                            <p className="bg-amber-500 text-white text-xs p-1.5 rounded">{task.priority.slice(0, 1).concat(task.priority.slice(1, task.priority.length).toLowerCase())}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
