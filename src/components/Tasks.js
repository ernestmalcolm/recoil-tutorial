import React from 'react'
import { useRecoilValue } from "recoil";
import { filteredTasks } from '../atom';
import Task from './Task';

function Tasks() {
    //read the default return value(which is a list of all tasks) of the filtered tasks selector and assign it to a constant tasks
    const tasks = useRecoilValue(filteredTasks);
    return (
        <div>
            {/* map through the tasks array and call the Task component for each element. Also pass the value of each element to the Task component */}
            {tasks.map((task, index) => (
                <Task task={task} key={index} />
            ))}
        </div>
    )
}
export default Tasks