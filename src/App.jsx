import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header"; // تأكد أن هذا الملف موجود
import Stats from "./components/Stats";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task 1", completed: false, priority: "high" },
    { id: 2, name: "Task 2", completed: true, priority: "medium" },
    { id: 3, name: "Task 3", completed: false, priority: "low" },
    { id: 4, name: "Task 4", completed: false, priority: "low" },
    { id: 5, name: "Task 5", completed: false, priority: "low" },
    { id: 6, name: "Task 6", completed: false, priority: "low" },
    { id: 7, name: "Task 7", completed: false, priority: "low" },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="container">
      <Header title="مدير المهام" count={tasks.length} />
      <Stats tasks={tasks} />
      <AddTaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;