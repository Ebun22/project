"use client"

import React from "react";
import { TodoFilter, Todos, AddTodo } from ".";
import { useStoreContext } from "../context/Context";



const TodoList = () => {

    const { handleAddTodo, open } = useStoreContext();

    return (
        <>
            <div>
                <div>
                    <h1>Todo List Application</h1>
                </div>
                <TodoFilter />
                <div>
                    <button type="button" onClick={(event) => handleAddTodo(event)}>Add todo +</button>
                </div>
                {open && <AddTodo />}
                <Todos />
            </div>
        </>
    )
}

export default TodoList