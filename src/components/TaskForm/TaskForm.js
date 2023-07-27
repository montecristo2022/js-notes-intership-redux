import { useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import { addTask } from "../../redux/tasksSlice";
import css from "./TaskForm.module.css";


export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const text = form.elements.text.value;

   
    const regex = /\d{1,2}[./]\d{1,2}[./]\d{2,4}/g;
    const dates = text.match(regex);

    dispatch(
      addTask({
        text: text,
        category: form.elements.category.value,
        dates: dates || [], 
      })
    );
    form.reset();
  };

    return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Add note text..."
      />
      <select name="category">
        <option>Idea</option>
        <option>Task</option>
        <option>Random Thought</option>
      </select>
      <Button type="submit">Add task</Button>
    </form>
  );
};













// export const TaskForm = () => {
//   const dispatch = useDispatch();

// const handleSubmit = event => {
//   event.preventDefault();
//   const form = event.target;
//   dispatch(
//     addTask({
//       text: form.elements.text.value,
//       category: form.elements.category.value
//     })
//   );
//   form.reset();
// };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <input
//         className={css.field}
//         type="text"
//         name="text"
//         placeholder="Add note text..."
//       />
//       <select name="category">
//         <option>Idea</option>
//         <option>Task</option>
//         <option>Random Thought</option>
//       </select>
//       <Button type="submit">Add task</Button>
//     </form>
//   );
// };
