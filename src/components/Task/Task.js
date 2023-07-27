import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { deleteTask, toggleCompleted } from "../../redux/tasksSlice";
import css from "./Task.module.css";


export const Task = ({ task }) => {
  console.log(task.dates)
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={!task.completed}
        onChange={handleToggle}
      />
      <p className={css.category}>{task.category}</p>
      <p className={css.text}>{task.text}</p>
      <p>Created time: {task.createdTime}</p>

      {task.dates?.length > 0 && (
        <p>Mentioned dates: {task.dates.join(', ')}</p>
      )}

      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};





// export const Task = ({ task }) => {
//   const dispatch = useDispatch();

//   const handleDelete = () => dispatch(deleteTask(task.id));

//   const handleToggle = () => dispatch(toggleCompleted(task.id));

//   return (
//     <div className={css.wrapper}>
//       <input
//         type="checkbox"
//         className={css.checkbox}
//         checked={!task.completed}
//         onChange={handleToggle}
//       />
//       <p className={css.category}>{task.category}</p>
//       <p className={css.text}>{task.text}</p>
//       <p>Created time: {task.createdTime}</p>
//       <button className={css.btn} onClick={handleDelete}>
//         <MdClose size={24} />
//       </button>
//     </div>
//   );
// };

