"use client"

import React from "react"
import { useStoreContext } from "../context/Context";

const UpdateTodo = () => {

    const { setOpenUpdate, handleAddFormSubmit, handleUpdateFormSubmit, setTodoUpdate, todoUpdate } = useStoreContext();
    const { content, description, due_date } = todoUpdate;
    return (
        <div>
            <p>Add a new Todo</p>
            <form>
                <h1>Add Todo</h1>
                <div>
                    <label>Title: </label>
                    <input
                        type="text"
                        placeholder="Title"
                        value={content}
                        onChange={(e) => setTodoUpdate(prev => ({ ...prev, content: e.target.value }))}
                    />
                </div>
                <div>
                    <label>Description: </label>
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setTodoUpdate(prev => ({ ...prev, description: e.target.value }))}
                    ></textarea>
                </div>
                <div>
                    <label>Due: </label>
                    <input
                        type="date"
                        value={due_date}
                        onChange={(e) => setTodoUpdate(prev => ({ ...prev, due_date: e.target.value }))}
                    />
                </div>
            </form>
            <div>
                <button type="button" onClick={(event) => handleUpdateFormSubmit(event)}>Done</button>
                <button type="button" onClick={() => setOpenUpdate(false)}> close X</button>
            </div>

        </div>
    )
}

export default UpdateTodo