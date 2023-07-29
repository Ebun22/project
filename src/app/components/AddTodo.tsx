"use client"

import React from "react"
import { useStoreContext } from "../context/Context";

const AddTodo = () => {

    const { setOpen, handleAddFormSubmit, todoData, setTodoData } = useStoreContext();
    const { content, description, due_date } = todoData;
    return (
        <div>
            <p>Add a new Todo</p>
            <form onSubmit={(event) => handleAddFormSubmit(event)}>
                <h1>Add Todo</h1>
                <div>
                    <label>Title: </label>
                    <input
                        type="text"
                        placeholder="Title"
                        value={content}
                        onChange={(e) => setTodoData(prev => ({ ...prev, content: e.target.value }))}
                    />
                </div>
                <div>
                    <label>Description: </label>
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setTodoData(prev => ({ ...prev, description: e.target.value }))}
                    ></textarea>
                </div>
                <div>
                    <label>Due: </label>
                    <input
                        type="date"
                        value={due_date}
                        onChange={(e) => setTodoData(prev => ({ ...prev, due_date: e.target.value }))}
                    />
                </div>
            </form>
            <div>
                <button type="button" onClick={(event) => handleAddFormSubmit(event)}>Done</button>
                <button type="button" onClick={() => setOpen(false)}> close X</button>
            </div>

        </div>
    )
}

export default AddTodo