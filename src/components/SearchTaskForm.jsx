import Field from "./Field"

const SearchTaskForm = (props) => {
    const {
        onSearchInput
    } = props

    return (
        <form 
        className="todo__form"
        onSubmit={(event) => event.preventDefault()} //отключение случайной отправки формы
        >
        <Field
            className="todo__field"
            label="Search task"
            id="search-task"
            type="search"
            onInput={(event) => onSearchInput(event.target.value)}
        />
        </form>
    )
}

export default SearchTaskForm