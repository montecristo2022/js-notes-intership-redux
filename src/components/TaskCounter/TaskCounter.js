
import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors";
import css from "./TaskCounter.module.css";

export const TaskCounter = () => {
  const tasks = useSelector(getTasks);

  const count = tasks.reduce((acc, task) => {
    // Если категория еще не была добавлена, добавьте ее
    if (!acc[task.category]) {
      acc[task.category] = { active: 0, completed: 0 };
    }

    // Увеличьте соответствующий счетчик
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

// export const TaskCounter = () => {
//   const tasks = useSelector(getTasks);

//   const count = tasks.reduce(
//     (acc, task) => {
//       if (task.completed) {
//         acc.completed += 1;
//       } else {
//         acc.active += 1;
//       }
//       return acc;
//     },
//     { active: 0, completed: 0 }
//   );

//   return (
//     <div>
//       <p className={css.text}>All active: {count.active}</p>
//       <p className={css.text}>All archived: {count.completed}</p>
//     </div>
//   );
// };
