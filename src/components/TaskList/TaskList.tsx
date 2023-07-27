import { useSelector } from "react-redux";
import Task from "../Task/Task";
import { getTasks, getStatusFilter } from "../../redux/selectors";
import { statusFilters } from "../../redux/constants";
import css from "./TaskList.module.css";

type TaskType = {
  id: string;
  completed: boolean;
  text: string;
  createdTime: string;
  category: string;
  dates: string[];
};

const getVisibleTasks = (tasks: TaskType[], statusFilter: string) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks: TaskType[] = useSelector(getTasks);
  const statusFilter: string = useSelector(getStatusFilter);
  const visibleTasks: TaskType[] = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
