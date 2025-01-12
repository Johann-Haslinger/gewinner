const ToDoCard = () => {
  const completedTasks = useCompletedTasksCount();
  const totalTasks = useTotalTasksCount();
  const openTasks = useOpenTasks();
  const percentage = Math.min((completedTasks / totalTasks) * 100, 100).toFixed(1);

  return (
    <div className="bg-yellow-600 bg-opacity-10 border border-yellow-600 border-opacity-15 rounded-lg p-6 max-w-sm w-full">
      <h2 className="text-lg font-bold text-yellow-600 mb-4">Reisevorbereitung</h2>
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-600 text-sm">Erledigte Aufgaben:</span>
        <span className="font-bold text-yellow-600">
          {completedTasks} / {totalTasks}
        </span>
      </div>
      <div className="relative bg-yellow-600 bg-opacity-10 rounded-full h-2 mb-4">
        <div className="absolute bg-yellow-600 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
      </div>
      <span className="text-sm text-gray-600">Fortschritt: {percentage}%</span>
      <ul className="mt-4 space-y-2">
        {openTasks.map((task) => (
          <li key={task.id} className="flex items-center">
            <span className="text-yellow-600 mr-2"></span>
            <span className="text-gray-600">{task.title}</span>
          </li>
        ))}
      </ul>
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

const useOpenTasks = () => {
  return [
    { id: 1, title: "Reisepass beantragen" },
    { id: 2, title: "Hotel buchen" },
    { id: 3, title: "Reiseversicherung abschließen" },
    { id: 4, title: "Koffer packen" },
    { id: 5, title: "Reiseapotheke zusammenstellen" },
  ];
};
