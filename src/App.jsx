import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import Stats from "./components/Stats";
import TaskList from "./components/TaskList"

function App() {
  return <>
    <Header/>
    <Stats/>
    <AddTaskForm/>
    <TaskList/>
  </>
}

export default App;
