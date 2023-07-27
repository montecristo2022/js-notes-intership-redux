import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksInitialState = [
  {
    id: 0,
    text: "Note 1",
    completed: true,
    createdTime: "7/30/2021",
    category: "Task",
    dates: [],
  },
  {
    id: 1,
    text: "Note 2",
    completed: true,
    createdTime: "8/15/2021",
    category: "Random Thought",
    dates: [],
  },
  {
    id: 2,
    text: "Note 3",
    completed: false,
    createdTime: "9/22/2021",
    category: "Idea",
    dates: [],
  },
  // { id: 3, text: "Note 4", completed: false, createdTime: "11/12/2021", category: "Task", dates: [] },
  // { id: 4, text: "Note 5", completed: false, createdTime: "1/1/2022", category: "Random Thought", dates: [] },
  // { id: 5, text: "Note 6", completed: false, createdTime: "3/18/2022", category: "Idea", dates: [] },
  // { id: 6, text: "Note 7", completed: false, createdTime: "6/24/2022", category: "Task", dates: [] },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
addTask: {
  reducer(state, action) {
    state.push(action.payload);
  },
  prepare({ text, category, dates }) {
    const currentDate = new Date();
    const formattedDate = `${
      currentDate.getMonth() + 1
    }/${currentDate.getDate()}/${currentDate.getFullYear()}`;
    return {
      payload: {
        id: nanoid(),
        text,
        category,
        dates,
        completed: false,
        createdTime: formattedDate,
      },
    };
  },
},

    deleteTask(state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
