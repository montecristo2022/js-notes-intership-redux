import Notiflix from "notiflix";
import { useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import { addTask } from "../../redux/tasksSlice";
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
    const text = (
      form.elements.namedItem("text") as HTMLInputElement
    ).value.trim();

    if (text === "") {
      Notiflix.Notify.failure("Your note can not be empty!", {
        timeout: 2500,
      });
      return;
    } else {
      Notiflix.Notify.success("Your note was added", {
        timeout: 2500,
      });
    }

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
    <form className="flex gap-4" onSubmit={handleSubmit}>
      <input
        className="flex-grow p-2  font-inherit border border-black-300 focus:outline-blue-600"
        type="text"
        name="text"
        placeholder="Add note text..."
      />

      <select
        className="w-48 p-2.5 bg-f8f8f8 border rounded-md border-gray-300 focus:outline-none"
        name="category"
      >
        <option className="bg-white">Idea</option>
        <option className="bg-white">Task</option>
        <option className="bg-white">Random Thought</option>
      </select>
      <Button type="submit">Add task</Button>
    </form>
  );
};
