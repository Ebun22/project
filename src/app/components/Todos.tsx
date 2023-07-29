"use client"

import React from "react";
import { useStoreContext } from "../context/Context";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const Todos = () => {
    const { data, handleUpdateTodo, deleteTodo } = useStoreContext();
    return (
        <div>
            {data?.map((todo) => (
                <div key={todo.id}>
                    <div>
                        <input type="checkbox" onChange={(event) => console.log(event.target.checked)} />
                    </div>
                    <div>
                        <button type="button" onClick={(event) => handleUpdateTodo(event, todo.id)}><FiEdit /></button>
                    </div>
                    <div>
                        <button type="button" onClick={() => deleteTodo(todo.id)}><RiDeleteBin6Line /></button>
                    </div>
                    <div>
                        <p>{todo.content}</p>
                    </div>
                    <div>
                        <p>{todo.description}</p>
                        <p>{todo.due.date}</p>
                    </div>
                    <div>
                        {todo.is_completed ?
                            <p>Complete</p>
                            :
                            <p>Pending</p>
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Todos;