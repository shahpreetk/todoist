import React from 'react'
import moment from 'moment';
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa'

const TaskDate = ({setTaskDate, showTaskDate, setShowTaskDate}) => showTaskDate && (
    <div className='task-date' data-testid='task-date-overlay'>
        <ul className='task-date__list'>
            <li onClick={()=>{
                setShowTaskDate(false)
                setTaskDate(moment().format('DD/MM/YYYY'))
            }} data-testid='task-date-overlay'>
                <span><FaSpaceShuttle /></span>
                <span>&nbsp;&nbsp;Today</span>
            </li>
            <li onClick={()=>{
                setShowTaskDate(false)
                setTaskDate(moment().add(1,'day').format('DD/MM/YYYY'))
            }} data-testid='task-date-tomorrow'>
                <span><FaSun /></span>
                <span>&nbsp;&nbsp;Tomorrow</span>
            </li>
            <li onClick={()=>{
                setShowTaskDate(false)
                setTaskDate(moment().add(7,'days').format('DD/MM/YYYY'))
            }} data-testid='task-date-next-week'>
                <span><FaRegPaperPlane /></span>
                <span>&nbsp;&nbsp;Next Week</span>
            </li>
        </ul>
    </div>
)

export default TaskDate