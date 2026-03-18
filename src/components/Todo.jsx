import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./todoList"
import Button from './Button'
import { TasksContext } from '../context/TasksContext'
import { useContext } from "react"

const Todo = () => {
    const {firstIncompleteTaskRef} = useContext(TasksContext)

    return (

        <div className="todo">
        <h1 className="todo__title">To-Do List</h1>
        <AddTaskForm />
        <SearchTaskForm />
        <TodoInfo />
        <Button 
        onClick={() => {
            firstIncompleteTaskRef.current?.scrollIntoView({ behavior: 'smooth' })
        }}
        >
            Show the first incomplete task
        </Button>
        <TodoList />
        </div>
    )
}

export default Todo