import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { allTasks } from '../atom'

const Input = () => {
    //Track the value of the input field
    const [input, setInput] = useState("")
    //Use the useSetRecoilState hook to update the allTasks atom
    const setTasks = useSetRecoilState(allTasks);

    //function to be called on the click of the add button.
    const addTask = (e) => {
        //prevent default form behavior on the click of add button
        e.preventDefault();
        //update the allTasks atom with the contents of the input field 
        setTasks((oldTasks) => [
            ...oldTasks, {
                id: Math.floor(Math.random() * 1000), //generate a random id for the new task
                text: input,
                isDone: false //set task completion to false by default
            }
        ])
        setInput("") //clear the contents of the input field
    }

    return (
        <div>
            {/* create a form that will be used to add a task */}
            <form>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                {/* Disable the button when the input field is empty */}
                <button type='submit' disabled={!input} onClick={(e) => addTask(e)}>Add</button>
            </form>
        </div>
    )
}

export default Input
