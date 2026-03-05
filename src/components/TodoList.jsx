import TodoItem from "./TodoItem"

const TodoList = (props) => {
    const {
      tasks = [], //массив объектов с полями title, id, isDone
      onDeleteTaskButtonClick,
      onTaskCompleteChange,
    } = props 

    const hasTasks = true

    if(!hasTasks) {
        return (
            <div className="todo__empty-message"></div>
        )
    }

    return (
        <ul className="todo__list">
            {tasks.map((task) => ( //Деструктурированная сущность task
              <TodoItem
              className="todo__item"
              key={task.id}
              {...task}
              onDeleteTaskButtonClick={onDeleteTaskButtonClick}
              onTaskCompleteChange={onTaskCompleteChange}
              />
              ))}
      </ul>
    )
}

export default TodoList