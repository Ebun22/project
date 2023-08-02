"use client"

import React from "react";
import { TodoFilter, Todos, AddTodo, UpdateTodo } from ".";
import { Dialog, DialogTrigger } from "./UI/Dialog";
import { useStoreContext } from "../context/Context";



const TodoList = () => {

    const { handleAddTodo, open, setOpen, openUpdate, filter } = useStoreContext();

    return (
        <>
            <div className='flex flex-col justify-center w-full'>

                <div className='flex flex-col w-3/5 mx-auto'>
                    <h1 className='mb-4 text-2xl font-bold text-center'>All {filter ? filter : "Todos"} </h1>
                    <TodoFilter />
                </div>
                <Dialog
                    open={open}
                    onOpenChange={setOpen}
                >

                    <DialogTrigger asChild>
                        <div className="mx-auto w-1/2 text-center rounded-lg bg-white my-8 shadow-lg hover:shadow-inner">
                            <button
                                type="button"
                                className="text-center py-4"
                                onClick={(event) => handleAddTodo(event)}>Add todo +</button>
                        </div>
                    </DialogTrigger>
                    {open &&
                        
                            <AddTodo />
                    }
                </Dialog>
                {openUpdate && <UpdateTodo />}
                <Todos />
            </div>
        </>
    )
}

export default TodoList