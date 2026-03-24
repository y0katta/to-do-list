import { useEffect, useState } from "react"
import tasksAPI from "../api/tasksAPI"


const TaskPage = (props) => {

    const{params}=props
    const taskId = params.id

    const [task, setTask] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        tasksAPI.getById(taskId).then((taskData) => {
            setTask(taskData)
            setHasError(false)
        }).catch(() => {
            setHasError(true)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [])

    if(isLoading){
        return <div>Loading...</div>
    }

    if(hasError){
        return <div>Task not found!</div>
    }

    return (
        <div style={{display: 'block', textAlign: 'center'}}>
            <h1>{task.title}</h1>
            <p>{task.isDone 
            ? 'Task complete' 
            : 'Task inprogress'}</p>
            <div>
                {task.isDone
                ? <img src="https://masterpiecer-images.s3.yandex.net/0f44eac3764d11ee9ad5ceda526c50ab:upscaled"></img>
                : <img src="https://avatars.mds.yandex.net/i?id=af3d1300588758a3ffafcb6239ed10f8_l-3858847-images-thumbs&n=13"></img>}</div>
        </div>
    )
}

export default TaskPage