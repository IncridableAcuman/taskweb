import { UseTasks } from "@/provider/TaskProvider";
import TaskItem from "../components/TaskItem";

interface TaskListProps {
  setView: (view: boolean) => void;
}

const TaskList = ({ setView }: TaskListProps) => {
  const { tasks } = UseTasks();

  if (!tasks.length) {
    return <p className="text-center text-gray-500">No tasks found</p>;
  }

  return (
    <div className="space-y-3">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onOpen={() => setView(true)}
        />
      ))}
    </div>
  );
};

export default TaskList;
