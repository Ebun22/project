"use client"

import React from "react";
import { TodoFilter, Todos, AddTodo, UpdateTodo } from ".";
import { useStoreContext } from "../context/Context";



const TodoList = () => {

    const { handleAddTodo, open, openUpdate } = useStoreContext();

    return (
        <>
            <div className='flex flex-col justify-center w-full'>
                <div>
                    <h1>Todo List Application</h1>
                </div>
                <TodoFilter />
                <div className="mx-auto w-1/2 text-center rounded-lg bg-white my-8 shadow-lg hover:shadow-inner">
                    <button 
                    type="button" 
                    className="text-center py-4 "
                    onClick={(event) => handleAddTodo(event)}>Add todo +</button>
                </div>
                {open && <AddTodo />}
                {openUpdate && <UpdateTodo />}
                <Todos />
            </div>
        </>
    )
}

export default TodoList