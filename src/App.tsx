import { Layout } from "./components/Layout/Layout";
import { AppBar } from "./components/AppBar/AppBar";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import { TaskCounter } from "./components/TaskCounter/TaskCounter";

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
      <TaskCounter/>
    </Layout>
  );
};
