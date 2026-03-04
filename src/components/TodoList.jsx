import TodoItem from "./TodoItem"

const TodoList = (props) => {
    const {
      tasks = [] //массив объектов с полями title, id, isDone
    } = props 

    const hasTasks = true

    if(!hasTasks) {
        return (
            <div className="todo__empty-message"></div>
        )
    }

    return (
        <ul className="todo__list">
            {tasks.map(({id, title, isDone}) => ( //Деструктурированная сущность task
              <TodoItem
              className="todo__item"
              id={id} //title.id
              title={title}
              isDone={isDone}
              key={id}
              //{...task}
              />
              ))}
      </ul>
    )
}

export default TodoList