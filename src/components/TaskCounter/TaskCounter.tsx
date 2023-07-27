import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors";
import css from "./TaskCounter.module.css";

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
    <div className={css.table}>
      {Object.entries(count).map(([category, { active, completed }]) => (
        <ul key={category}>
          <li className={css.cell}>{category}</li>
          <li className={css.cell}>Active: {active}</li>
          <li className={css.cell}>Archived: {completed}</li>
        </ul>
      ))}
    </div>
  );
};
