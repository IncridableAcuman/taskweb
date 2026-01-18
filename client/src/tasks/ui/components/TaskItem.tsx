import { Checkbox } from "@/components/ui/checkbox";
import { Bell, Calendar, Star } from "lucide-react";
import { useState } from "react";
import TaskBadges from "./TaskBadges";

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  dueDate: string;
}

interface TaskItemProps {
  task: Task;
  onOpen: () => void;
}

const TaskItem = ({ task, onOpen }: TaskItemProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div
      className="flex items-center justify-between gap-3 bg-white p-4 border border-gray-300 rounded-md
                 shadow hover:shadow-md transition cursor-pointer"
    >
      {/* LEFT */}
      <div className="flex items-start gap-3">
        <Checkbox />

        <div className="space-y-2">
          {/* TITLE */}
          <h1 className="flex items-center gap-2 font-medium">
            {task.title}
            <Star
              size={18}
              onClick={(e) => {
                e.stopPropagation();
                setIsFavorite(prev => !prev);
              }}
              className={`cursor-pointer transition-colors
                ${isFavorite ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
            />
          </h1>

          {/* MOBILE STATUS */}
          <div className="block md:hidden" onClick={onOpen}>
            <TaskBadges status={task.status} priority={task.priority} />
          </div>

          {/* META */}
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <span>John Doe</span>

            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {task.dueDate}
            </span>

            <span className="flex items-center gap-1">
              <Bell size={12} />
              Subtasks: 1/2
            </span>
          </div>
        </div>
      </div>

      {/* DESKTOP STATUS */}
      <div className="hidden md:block" onClick={onOpen}>
        <TaskBadges status={task.status} priority={task.priority} />
      </div>
    </div>
  );
};

export default TaskItem;
