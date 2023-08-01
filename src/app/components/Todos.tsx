"use client"

import React from "react";
import { useStoreContext } from "../context/Context";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const Todos = () => {
    const { data, handleUpdateTodo, deleteTodo } = useStoreContext();
    return (
        <div className='flex flex-col justify-center w-full '>
            {data ? (
                data.map((todo) => (
                    <div className='shadow-lg shadow-indigo-500/40 mx-auto bg-white rounded-lg w-1/2 mb-14 p-6'>
                        <div key={todo.id} className='flex flex-row space-x-36'>

                            <div className="w-3/5 flex flex-row">
                                <div className="w-7">
                                    <input type="checkbox" onChange={(event) => console.log(event.target.checked)} />
                                </div>
                                <div>
                                    <div>
                                        <h2 className="font-bold text-lg">{todo.content.charAt(0).toUpperCase() + todo.content.slice(1)}</h2>
                                    </div>
                                    <div>
                                        <p>{todo.description}</p>
                                        <p className='text-xs font-extralight italic text-slate-800 mt-4'>{todo.due.date}</p>
                                    </div>
                                </div>


                            </div>

                            <div className='flex flex-col w-18 space-y-20'>
                                <div className="w-14 flex flex-row">
                                    <div className='mr-8'>
                                        <button type="button" onClick={(event) => handleUpdateTodo(event, todo.id)}><FiEdit /></button>
                                    </div>
                                    <div>
                                        <button type="button" onClick={() => deleteTodo(todo.id)}><RiDeleteBin6Line /></button>
                                    </div>
                                </div>

                                <div className="w-8">
                                    {todo.is_completed ?
                                        <div className="rounded-lg p-2 text-center w-20 bg-red-300">
                                            <p className="text-lime-700 text-xs">Complete</p>
                                        </div>
                                        :
                                        <div className="rounded-lg p-2 text-center w-20 bg-red-300">
                                            <p className='text-red-700 text-xs'>Pending</p>
                                        </div>

                                    }
                                </div>

                            </div>

                        </div>
                    </div>

                ))
            ) : " "}
        </div>
    )
}

export default Todos;