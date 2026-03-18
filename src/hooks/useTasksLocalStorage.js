const useTasksLocalStorage = () => {
    const saveTasks = localStorage.getItem('tasks')

    const saveTask = (tasks) => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    return {
        saveTasks: saveTasks ? JSON.parse(saveTasks) : null,
        saveTask
    }
}

export default useTasksLocalStorage