import { FaTimes } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'
import UpdateTask from './UpdateTask'
import { useState } from 'react'

const Task = ({ task, onDelete, onToggle}) => {
    const [showUpdateTask, setShowUpdateTask] = useState(false)
    // const [text, setText] = useState('')
    // const [day, setDay] = useState('')
    // const [reminder, setReminder] = useState(false)

    return (
        <>
            {showUpdateTask && <UpdateTask />}
            <div  className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)} >
                <h3>
                    {task.text}
                    <span>
                        <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} title='delete' />
                        <FaPencilAlt style={{ paddingLeft: '5px' }} title='update' onClick={() => setShowUpdateTask(!showUpdateTask)} />
                    </span>
                </h3>
                <p>{task.day}</p>
            </div>
        </>
    )
}

export default Task
