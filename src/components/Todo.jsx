import {useState} from 'react'
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./todoList"


const Todo = () => {
    const [tasks, setTasks] = useState([  //начальные значения
        {id: 'task-1', title: 'Task 1', isDone: false},
        {id: 'task-2', title: 'Task 2', isDone: true},
    ])

    //с помощью setTasks обновляем список задач

    const [newTaskTitle, setNewTaskTitle] = useState('') //хранение данных

    const deleteAllTasks = () => {
        const isConfirmed = confirm('Are you sure you want to delete all?')
        if(isConfirmed){
            setTasks([])
        }
    }

    const deleteTask = (taskId) => {
        setTasks(
            tasks.filter((task) => task.id !== taskId)
        )
    }

    const toggleTaskComplete = (taskId, isDone) => {
        setTasks(
            tasks.map((task) =>  {
                if(task.id == taskId){
                    return {...task, isDone}
                }
                return task
            })
        )
    }

    const filterTasks = (query) => {
        console.log(`Search: ${query}`)
    }

    const addTask = () => {
        if(newTaskTitle.trim().length > 0){
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString(), //уникальный id
                title: newTaskTitle,
                isDone: false,
            }

            setTasks([...tasks, newTask])
            setNewTaskTitle('')
        }
    }

    return (
    <div className="todo">
        <h1 className="todo__title">To-Do List</h1>
        <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
        />
        <SearchTaskForm
            onSearchInput={filterTasks}
        />
        <TodoInfo
            total={tasks.length}
            done={tasks.filter(({isDone}) => isDone).length}
            onDeleteAllButtonClick={deleteAllTasks}
        />
        <TodoList 
            tasks={tasks}
            onDeleteTaskButtonClick={deleteTask}
            onTaskCompleteChange={toggleTaskComplete}
        />
    </div>
    )
}

export default Todo