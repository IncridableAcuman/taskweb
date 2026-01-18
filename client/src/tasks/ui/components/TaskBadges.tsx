interface Props {
  status: string;
  priority: string;
}

const TaskBadges = ({ status, priority }: Props) => {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="bg-sky-200 text-sky-700 px-2 py-0.5 rounded">
        {status}
      </span>
      <span className="bg-amber-800 text-white px-2 py-0.5 rounded">
        {priority}
      </span>
    </div>
  );
};

export default TaskBadges;
