import React from 'react'
import { useRecoilState } from 'recoil';
import { allTasks } from '../atom';

const Task = ({ task }) => {
    const [tasks, setTasks] = useRecoilState(allTasks);
    const index = tasks.findIndex((taskItem) => taskItem === task);

    const replaceItemAtIndex = (arr, index, newValue) => {
        return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
    };

    const removeItemAtIndex = (arr, index) => {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
    };

    const toggleTaskCompletion = () => {
        const newTasks = replaceItemAtIndex(tasks, index, {
          ...task,
          isDone: !task.isDone
        });
        setTasks(newTasks)
    };

    //Delete a task
    const deleteTask = (id) => {
        const newTasks = removeItemAtIndex(tasks, index);

        setTasks(newTasks);
    }

    return (
        <div>
            <span>{task.text}</span>
            <input
                type="checkbox"
                checked={task.isDone}
                onChange={toggleTaskCompletion}
            />
            <button onClick={deleteTask}>X</button>
        </div>
    )
}

export default Task