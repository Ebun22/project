"use client"

import React, { Dispatch, ReactEventHandler, SetStateAction, useEffect, useState } from "react";
import { useContext, createContext } from "react";

type Due = {
    date: string,
    string: string,
    lang: string,
    is_recurring: false
}

interface Todo {
    id: string,
    content: string,
    description: string;
    due: Due;
    is_completed: boolean;
}
interface TodoData {
    content: string,
    description: string,
    due_date: string,
}

const todo = {
    content: '',
    description: '',
    due_date: ' '
}

interface Context {
    data: Todo[] | null,
    handleAddTodo: Function,
    todoData: TodoData,
    setTodoData: Dispatch<SetStateAction<TodoData>>,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    handleAddFormSubmit: ReactEventHandler,
}

const Context = createContext<null | Context>(null);


export function useStoreContext() {
    const store = useContext(Context);
    if (store === null) {
        throw new Error("Todos can't be found")
    }
    return store;
}

function StoreProvider({ children }: any) {
    const [url, setURL] = useState("https://api.todoist.com/rest/v2/tasks")
    const [data, setData] = useState<Todo[]>([])
    const [todoData, setTodoData] = useState<TodoData>(todo)
    const [open, setOpen] = useState<boolean>(false)



    const getAllTodos = async () => {
        const response = await fetch(url, {
            method: 'GET',
            headers: new Headers({
                "Authorization": "Bearer f537f19a7d6ea045ec2db7d7597ecb526ed9c362"
            })
        })

        try {
            if (response.status === 200) {
                const data = await response.json()
                console.log(data)
                setData(data)
            } else {
                throw new Error("Todos can't be found");
            }

        } catch (error) {
            //include toast
            throw new Error("Poor Network connection");
        }
    }

    useEffect(() => {
        getAllTodos();
    }, [])

    const handleAddTodo = () => {
        setOpen(true)

    }

    const handleAddFormSubmit = async (event: React.MouseEvent) => {
        event.preventDefault();
        console.log(todoData)
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                "X-Request-Id": "c5c378a8-d569-48ff-ab56-e4a026e98378",
                "Authorization": "Bearer f537f19a7d6ea045ec2db7d7597ecb526ed9c362",
            },
            body: JSON.stringify(todoData),
        })
        if (response.status === 200)  setOpen(false)
        try {
            const data = await response.json();
            console.log(data)
            setData(data)
        } catch (error) {

        }
       
    }

    const value = {
        data,
        handleAddTodo,
        todoData,
        setTodoData,
        open,
        setOpen,
        handleAddFormSubmit,
    }
    const Provider = Context.Provider
    return <Provider value={value}> {children} </Provider>
}

export default StoreProvider