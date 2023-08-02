import React from "react";
import { useState, useEffect } from 'react'
import ReactDom from 'react-dom';
import { useStoreContext } from "../context/Context";
import { AddTodo } from ".";


export default function Modal({ }) {
    const { setOpen, open, openUpdate } = useStoreContext();
    const [isBrowser, setIsBrowser] = useState(false);
    
    useEffect(() => {
        setIsBrowser(true);
    }, []);
console.log(open)
    const modalContent = open ? (
        <div className="blur-lg ">
            <AddTodo />
        </div>
    ) : null;

        const modalRoot = document.getElementById("modal-root");
        console.log(modalRoot)
        return modalRoot ?
        ReactDom.createPortal(
            modalContent,
           modalRoot
        ) : null;
    
    //     return ReactDom.createPortal(
    //         modalContent,
    //         document.getElementById("modal-root")
    //     );
    // } else {
       
    // }
}