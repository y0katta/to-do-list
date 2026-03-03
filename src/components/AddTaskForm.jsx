import Button from "./Button"
import Field from "./Field"

const AddTaskForm = () => { {/**рендеринг формы, используя Field и Button */}
    return(
        <form className="todo__form">
            <Field/>
            <Button/>
        </form>
    )
}

export default AddTaskForm