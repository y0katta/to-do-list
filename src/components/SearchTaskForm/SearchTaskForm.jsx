import Field from "../Field/Field"
import { useContext } from "react"
import { TasksContext } from "../../context/TasksContext"

const SearchTaskForm = (props) => {
    const {styles} = props

    const {
        searchQuery,
        setSearchQuery,
    } = useContext(TasksContext)

    const handleClear = () => setSearchQuery('')

    return (
        <form 
        className={styles.form}
        onSubmit={(event) => event.preventDefault()}
        >
        <div className={styles.searchWrapper}>
        <Field
            className={styles.field}
            label="Search task"
            id="search-task"
            type="search"
            value={searchQuery}
            onInput={(event) => setSearchQuery(event.target.value)}
        />
        {searchQuery && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className={styles.clearButton}
                        aria-label="Очистить поиск"
                    >
                        ✕
                    </button>
                )}
            </div>
        </form>
    )
}

export default SearchTaskForm