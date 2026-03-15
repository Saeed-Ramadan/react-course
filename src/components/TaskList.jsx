import TaskItem from "./TaskItem"


function TaskList({ tasks, onToggle, onDelete }) {
    

    return (
        <div>
            <TaskItem task={tasks} onToggle={onToggle} onDelete={onDelete}/>
        </div>
    )
}

export default TaskList
