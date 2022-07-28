import React from 'react'
import { useRecoilState } from "recoil";
import { tasksFilter } from '../atom';

const TaskFilters = () => {

    const [filter, setFilter] = useRecoilState(tasksFilter);

    return (
        <div>
            Filter:
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="Show All">All</option>
                    <option value="Show Completed">Completed</option>
                    <option value="Show Uncompleted">Uncompleted</option>
                </select>
        </div>
    )
}

export default TaskFilters