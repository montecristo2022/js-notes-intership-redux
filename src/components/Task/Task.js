import { MdEdit, MdDone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { deleteTask, toggleCompleted, editTask } from "../../redux/tasksSlice";
import css from "./Task.module.css";
import { useState } from 'react';

export const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleTextChange = (event) => {
    setNewText(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDoneClick = () => {
    dispatch(editTask({ id: task.id, newText }));
    setIsEditing(false);
  };

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
      {!isEditing && <MdEdit size={24} onClick={handleEditClick} />}
      {isEditing && <MdDone size={24} onClick={handleDoneClick} />}
      <p className={css.category}>{task.category}</p>
      {isEditing ? (
        <input className={css.input} value={newText} onChange={handleTextChange} />
      ) : (
        <p className={css.text}>{task.text}</p>
      )}
      {task.dates?.length > 0 && (
        <p>Mentioned dates: {task.dates.join(", ")}</p>
      )}
      <p>Created time: {task.createdTime}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
