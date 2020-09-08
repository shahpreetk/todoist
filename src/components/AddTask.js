import React from 'react'
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa';
import moment from 'moment';
import { firebase } from '../firebase'
import { useSelectedProjectValue } from '../context';

const AddTask = ({ showAddTaskMain = true, showShouldMain = false, showQuickAddTask, setShowQuickAddTask }) => {
    const [task, setTask] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [project, setProject] = useState('')
    const [showMain, setShowMain] = useState(shouldShowMain)
    const [showProjectOverlay, setShowProjectOverlay] = useState(false)
    const [showTaskDate, setShowTaskDate] = useState(false)

    const { selectedProject } = useSelectedProjectValue()

    const addTask = () => {
        const projectId = project || selectedProject;
        let collatedDate = ''

        if (projectId === 'TODAY') {
            collatedDate = moment().format('DD/MM/YYYY')
        } else if (projectId === 'NEXT_7') {
            collatedDate = moment().add(7, 'days').format('DD/MM/YYYY')
        }
        return (
            task &&
            projectId &&
            firebase
                .firestore()
                .collection('tasks')
                .add({
                    archived: false,
                    projectId,
                    task,
                    date: collatedDate || taskDate,
                    userId: 'c422780d6077477594639749729eef36'
                })
                .then(() => {
                    setTask('')
                    setProject('')
                    setShowMaink('')
                    setShowProjectOverlay(false)
                })
        )
    }

    return (
        <p>stop</p>
    )
}

export default AddTask;