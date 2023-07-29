"use client"

import React, { Dispatch, ReactEventHandler, SetStateAction, useEffect, useState } from "react";
import { useContext, createContext } from "react";
import { TOKEN } from '../API';
import { X_REQUEST_ID } from '../API';

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
    openUpdate: boolean,
    id: string,
    // setId: Dispatch<SetStateAction<string>>,
    setOpenUpdate: Dispatch<SetStateAction<boolean>>,
    setOpen: Dispatch<SetStateAction<boolean>>,
    handleAddFormSubmit: ReactEventHandler,
    handleUpdateFormSubmit: (event: React.MouseEvent) => void,
    handleUpdateTodo: (event: React.MouseEvent, id: string) => void,
    todoUpdate: TodoData,
    setTodoUpdate: Dispatch<SetStateAction<TodoData>>,
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
    const [data, setData] = useState([])
    const [todoData, setTodoData] = useState(todo)
    const [todoUpdate, setTodoUpdate] = useState(todo)
    const [id, setId] = useState('')
    const [open, setOpen] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)

    // console.log(todoUpdate)
    // console.log(todoData)
    const getAllTodos = async () => {
        const response = await fetch(url, {
            method: 'GET',
            headers: new Headers({
                "Authorization": `Bearer ${TOKEN}`
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
                "X-Request-Id": `${X_REQUEST_ID}`,
                "Authorization": `Bearer ${TOKEN}`,
            },
            body: JSON.stringify(todoData),
        })
        if (response.status === 200) setOpen(false)
        try {
            const data = await response.json();
            console.log(data)
            setData(data)
        } catch (error) {

        }

    }
    const deleteTodo = async(id: string) => {
        console.log(id)
        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'DELETE',
                headers: new Headers({
                    "Authorization": `Bearer ${TOKEN}`
                })
            })
            const data = await response.json()
            return data
            console.log(data)
        }catch(error){
            throw new Error("Poor network connection")
        }
    }

    const getTodo = async (id: string) => {
        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'GET',
                headers: new Headers({
                    "Authorization": `Bearer ${TOKEN}`
                })
            })

            const data = await response.json();
            setTodoUpdate({
                content: data.content,
                description: data.description,
                due_date: data.due.date,
            })

        } catch (error) {

        }

    }

    const handleUpdateTodo = (event: React.MouseEvent, id: string) => {
        getTodo(id)
        setOpenUpdate(true)
        setId(id)
      
    }

    const handleUpdateFormSubmit = async (event: React.MouseEvent) => {
       
        console.log(id)
        try {
            const response = await fetch(`${url}/${id}`, {
                method: 'POST',
                headers: new Headers({
                    'content-type': 'application/json',
                    "X-Request-Id": `${X_REQUEST_ID}`,
                    "Authorization": `Bearer ${TOKEN}`,
                }),
                body: JSON.stringify(todoUpdate)
            })
            if (response.status === 200) {
                const data = await response.json();
                getAllTodos();
                // if(await deleteTodo(id))  
               
            }

        } catch (error) {
            throw new Error(`${error}: Sorry this page ca't be reached`)
        }
    }

    const value = {
        id,
        data,
        handleAddTodo,
        todoData,
        setTodoData,
        openUpdate,
        open,
        setOpen,
        setOpenUpdate,
        handleAddFormSubmit,
        handleUpdateFormSubmit,
        handleUpdateTodo,
        todoUpdate,
        setTodoUpdate
    }
    const Provider = Context.Provider
    return <Provider value={value}> {children} </Provider>
}

export default StoreProvider