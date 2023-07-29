"use client"

import React from "react";
import { useStoreContext } from "../context/Context";

const Todos = () => {
    const { data } = useStoreContext();
    return (
        <div>
            {data?.map((todo) => (
                <div key={todo.id}>
                    
                    <div>
                        <input type="checkbox" onChange={(event) => console.log(event.target.checked)} />
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