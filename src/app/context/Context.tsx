"use client"

import React, { Dispatch, ReactEventHandler, SetStateAction, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useContext, createContext } from "react";
import { TOKEN } from '../API';
import { X_REQUEST_ID } from '../API';

type candidate = string
type votes = string

const Details = {
    name: '',
    matric_No: '',
    email: ' ',
    password: '',
}
interface Form {
    name: string,
    matric_No: string,
    email: string,
    password: string,
}
const ElectionForm = {
    title: '',
    about:'',
    numOfCandidates: '',
    candidateName: [],
}

interface ElectionFormType {
    title: string,
    about: string,
    numOfCandidates: string,
    candidateName: candidate[],
}
interface Context {
    candidateData: candidate[] | null,
    showVote: boolean,
    showSignUp: boolean,
    form: Form,
    electionForm: ElectionFormType, 
    setElectionForm: Dispatch<SetStateAction<ElectionFormType>>,
    setForm: Dispatch<SetStateAction<Form>>,
    setShowSignUp: Dispatch<SetStateAction<boolean>>,
    handleVotes: React.ChangeEventHandler<HTMLInputElement>,
    handleFormSubmit: (event: React.MouseEvent) => void,
    handleClick: React.MouseEventHandler<HTMLButtonElement>
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
    // const [url, setURL] = useState("https://api.todoist.com/rest/v2/tasks")
    const [showVote, setShowVote] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [vote, setVote] = useState<string | null>(null)
    const [form, setForm] = useState<Form>(Details)
    const [electionForm, setElectionForm] = useState<ElectionFormType>(ElectionForm)
    const [candidateData, setCandidateData] = useState<candidate[] | null>([
        "Tinubu",
        "Asake",
        "Atiku",
        "Peter Obi"
    ])

    const handleClick = () => {
        setShowVote(true)
    }

    const handleVotes = (event: React.ChangeEvent<HTMLInputElement>) => {

        const newValue = event.target.value
        setVote(newValue)
        console.log(vote)
    }

    const handleFormSubmit = (event: React.MouseEvent) => {
        event.preventDefault()
    }

    const value = {
        candidateData,
        handleClick,
        showVote,
        showSignUp,
        form,
        setForm,
        electionForm, 
        setElectionForm,
        setShowSignUp,
        handleVotes,
        handleFormSubmit,
    }

    const Provider = Context.Provider
    return <Provider value={value}> {children} </Provider>
}

export default StoreProvider