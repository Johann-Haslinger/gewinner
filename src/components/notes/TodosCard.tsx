import { IoCheckmarkDoneCircle, IoEllipseOutline } from "react-icons/io5";
import { Task } from "../../common/interfaces";

const ToDoCard = () => {
  const completedTasks = useCompletedTasksCount();
  const totalTasks = useTotalTasksCount();
  const openTasks = useOpenTasks();
  const percentage = Math.min((completedTasks / totalTasks) * 100, 100).toFixed(1);

  return (
    <div className="bg-blue-600 bg-opacity-10 border border-blue-600 border-opacity-15 rounded-lg p-6 max-w-sm w-full">
      <h2 className="text-lg font-bold text-blue-600 mb-4">Todos</h2>
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-600 text-sm">Erledigte Aufgaben:</span>
        <span className="font-bold text-blue-600">
          {completedTasks} / {totalTasks}
        </span>
      </div>
      <div className="relative bg-blue-600 bg-opacity-10 rounded-full h-2 mb-4">
        <div className="absolute bg-blue-600 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
      <span className="text-sm text-gray-600">Fortschritt: {percentage}%</span>
      <div className="mt-4 space-y-2">
        {openTasks.map((task) => (
          <TaskCell task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default ToDoCard;

const useCompletedTasksCount = () => {
  return 10;
};

const useTotalTasksCount = () => {
  return 15;
};

const useOpenTasks = (): Task[] => {
  return [
    { id: "1", title: "Reisepass beantragen", done: false },
    { id: "2", title: "Hotel buchen", done: false },
    { id: "3", title: "Reiseversicherung abschließen", done: false },
    { id: "4", title: "Koffer packen", done: false },
    { id: "5", title: "Reiseapotheke zusammenstellen", done: false },
  ];
};

const TaskCell = ({ task: { title, done } }: { task: Task }) => {
  return (
    <div>
      <div className="flex items-center">
        <span className="text-blue-600 mr-2 text-xl">{done ? <IoCheckmarkDoneCircle /> : <IoEllipseOutline />}</span>
        <span className="dark:text-white">{title}</span>
      </div>
    </div>
  );
};
