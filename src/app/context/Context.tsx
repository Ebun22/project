"use client"

import React, { Dispatch, LegacyRef, ReactEventHandler, SetStateAction, useEffect, useRef, useState } from "react";
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
    about: '',
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
    addInput: boolean,
    showHome: boolean,
    showNewBallot: boolean,
    showResult: boolean,
    homeRef: React.MutableRefObject<HTMLParagraphElement | null>,
    ballotRef: React.MutableRefObject<HTMLParagraphElement | null>,
    resultRef: React.MutableRefObject<HTMLParagraphElement | null>,
    handleAddInput: React.MouseEventHandler<HTMLButtonElement | null>,
    inputCounter: Number,
    handleHome: (homeRef: React.MutableRefObject<HTMLParagraphElement | null>) => void,
    handleNewBallot: (ballotRef: React.MutableRefObject<HTMLParagraphElement | null>) => void,
    handleResult: (resultRef: React.MutableRefObject<HTMLParagraphElement | null>) => void,
    setAddInput: Dispatch<SetStateAction<boolean>>,
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
    const [addInput, setAddInput] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [showNewBallot, setShowNewBallot] = useState(false);
    const [showHome, setShowHome] = useState(false);
    const [inputCounter, setInputCounter] = useState(0)
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

    const homeRef = useRef<HTMLParagraphElement>(null);
    const ballotRef = useRef<HTMLParagraphElement>(null);
    const resultRef = useRef<HTMLParagraphElement>(null);

    const handleAddInput = () => {
        console.log(inputCounter)
        setInputCounter(inputCounter + 1)
    }
    const handleHome = (homeRef: React.MutableRefObject<HTMLParagraphElement | null>) => {
        console.log("you clisked on show home")
        if (homeRef.current) homeRef.current.focus(), console.log(homeRef.current)
        
        setShowHome(true)
        setShowNewBallot(false)
        setShowResult(false)
    }

    const handleNewBallot = (ballotRef: React.MutableRefObject<HTMLParagraphElement | null>) => {
        console.log("you clisked on newBallot")
        if (ballotRef.current) ballotRef.current.focus()
        setShowHome(false)
        setShowNewBallot(true)
        setShowResult(false)
    }

    const handleResult = (resultRef: React.MutableRefObject<HTMLParagraphElement | null>) => {
        console.log("you clisked on show Result")
        if (resultRef.current) resultRef.current.focus()
        setShowHome(false)
        setShowNewBallot(false)
        setShowResult(true)
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
        inputCounter,
        setElectionForm,
        setShowSignUp,
        handleAddInput,
        handleHome,
        handleNewBallot,
        handleResult,
        handleVotes,
        homeRef,
        ballotRef,
        resultRef,
        showHome,
        showNewBallot,
        showResult,
        addInput,
        setAddInput,
        handleFormSubmit,
    }

    const Provider = Context.Provider
    return <Provider value={value}> {children} </Provider>
}

export default StoreProvider