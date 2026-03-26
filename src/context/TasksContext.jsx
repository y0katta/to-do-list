import { createContext, useMemo} from "react";
import useTasks from "../hooks/useTasks";
import useIncompleteTaskScroll from "../hooks/useIncompleteTaskScroll";

export const TasksContext = createContext({})

export const TasksProvider = (props) => {
    const {children} = props

    const {
        tasks,
        filteredTasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        searchQuery,
        setSearchQuery,
        addTask,
        newTaskInputRef,
        disappearingTaskId,
        appearingTaskId,
    } = useTasks()

    const {
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    } = useIncompleteTaskScroll(tasks)

    const value = useMemo(() => ({
        tasks,
        filteredTasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        searchQuery,
        setSearchQuery,
        addTask,
        newTaskInputRef,
        disappearingTaskId,
        appearingTaskId,
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    }), [tasks,
        filteredTasks,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        searchQuery,
        setSearchQuery,
        addTask,
        newTaskInputRef,
        disappearingTaskId,
        appearingTaskId,
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
    ])

    return (
    <TasksContext.Provider 
    value={value}>
        {children}
    </TasksContext.Provider>
    )
}