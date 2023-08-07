import Notiflix from "notiflix";
import { MdEdit, MdDone, MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTask, toggleCompleted, editTask } from "../../redux/tasksSlice";
import { useState } from "react";

interface Task {
  id: any;
  text: string;
  completed: boolean;
  createdTime: string;
  category: string;
  dates: string[];
}

interface TaskProps {
  task: Task;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDoneClick = () => {
    dispatch(editTask({ id: task.id, newText }));
    setIsEditing(false);
  };

  const handleDelete = () => {
    Notiflix.Notify.success("Your note was deleted", {
      timeout: 1000,
    });
    dispatch(deleteTask(task.id));
  };
  const handleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className="flex items-center space-x-3 py-2">
      <input
        type="checkbox"
        className="w-6 h-6 cursor-pointer border "
        checked={!task.completed}
        onChange={handleToggle}
      />
      {!isEditing && <MdEdit size={24} onClick={handleEditClick} />}
      {isEditing && <MdDone size={24} onClick={handleDoneClick} />}
      <p className="w-24">{task.category}</p>
      {isEditing ? (
        <input
          className="w-96 h-7.5 p-1 border border-black-300 focus:outline-blue-700"
          value={newText}
          onChange={handleTextChange}
        />
      ) : (
        <p className="flex-grow">{task.text}</p>
      )}
      {task.dates?.length > 0 && (
        <p>Mentioned dates: {task.dates.join(", ")}</p>
      )}
      <p>Created time: {task.createdTime}</p>
      <button
        className="flex items-center justify-center w-8 h-8 p-0 m-0 border-none rounded text-red-500 bg-transparent hover:bg-gray-200 active:bg-gray-400 cursor-pointer"
        onClick={handleDelete}
      >
        <MdClose size={36} />
      </button>
    </div>
  );
};

export default Task;
