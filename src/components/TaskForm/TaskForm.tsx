import { useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import { addTask } from "../../redux/tasksSlice";
import css from "./TaskForm.module.css";
import { FormEvent } from "react";

interface TaskData {
  text: string;
  category: string;
  dates: string[];
}

export const TaskForm: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const text = (form.elements.namedItem("text") as HTMLInputElement).value;

    const regex = /\d{1,2}[./]\d{1,2}[./]\d{2,4}/g;
    const dates = text.match(regex);

    const taskData: TaskData = {
      text: text,
      category: (form.elements.namedItem("category") as HTMLSelectElement)
        .value,
      dates: dates || [],
    };

    dispatch(addTask(taskData));
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
