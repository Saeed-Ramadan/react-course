import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header"; // تأكد أن هذا الملف موجود
import Stats from "./components/Stats";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
{ id: 1, name: "شراء البقالة", completed: false, priority: "high" },
{ id: 2, name: "تنظيف المنزل", completed: true, priority: "medium" },
{ id: 3, name: "ممارسة الرياضة", completed: false, priority: "low" },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;

    }
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