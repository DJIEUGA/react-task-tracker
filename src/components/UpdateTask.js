import { useState } from "react"

const UpdateTask = ({ onUpdate }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onUpdateTask = (e) => {

        // update task component
        if (!text) {

            alert('Please edit the task')
            return
        }

        onUpdate({ text, day, reminder })

        // clear field after submission
        setText('')
        setDay('')
        setReminder(false)

        // prevent submit to page
        // e.preventdefault()


    }
    return (
        <form onSubmit={onUpdateTask} className="update-task">
            <div className="update-task-input">
                <span>Task <input className="form-control" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Update Task" /></span>
                <span>Day&Time<input className="form-control" type="text" value={day} onChange={(e) => setDay(e.target.value)} placeholder="Update Date & Time" /></span>
                <span>Reminder<input type='checkbox' checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} className="form-control-input" /></span>
            </div>
            <input type="submit" value="Update Task" className="btn btn-block" />
        </form>
    )
}

export default UpdateTask
