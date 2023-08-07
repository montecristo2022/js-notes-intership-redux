import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors";

type TaskType = {
  category: string;
  completed: boolean;
};

type CountType = {
  [category: string]: {
    active: number;
    completed: number;
  };
};

export const TaskCounter = () => {
  const tasks: TaskType[] = useSelector(getTasks);

  const count = tasks.reduce<CountType>((acc, task) => {
    if (!acc[task.category]) {
      acc[task.category] = { active: 0, completed: 0 };
    }
    if (task.completed) {
      acc[task.category].completed += 1;
    } else {
      acc[task.category].active += 1;
    }

    return acc;
  }, {});

  return (
    <div className="grid grid-cols-3 gap-5 text-lg mb-5">
      {Object.entries(count).map(([category, { active, completed }]) => (
        <ul key={category}>
          <li className="flex justify-center items-center border border-gray-300 p-2.5">
            <p>{category}</p>
          </li>
          <li className="flex justify-center items-center border border-gray-300 p-2.5">
            <p>Active: {active}</p>
          </li>
          <li className="flex justify-center items-center border border-gray-300 p-2.5">
            <p>Archived: {completed}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};
