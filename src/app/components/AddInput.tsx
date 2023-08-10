"use client"
import React from "react";
import { useStoreContext } from "../context/Context";

const AddInput = () => {
    const {addInput, electionForm, setElectionForm} = useStoreContext();
    const { candidateName } = electionForm
    return(
        <>
            {
                Array.from(Array(addInput)).map((index) => {
                    return ({
                        <div className="mt-4 flex flex-col">
                        <label htmlFor="candidates_name" className="font-bold">Candidate's Name: </label>
                        <input 
                        type="text"  
                        value={candidateName} 
                        name="candidates_name"  
                        className="mt-2 rounded-lg pl-4 border-2 border-solid border-black "
                        onChange={(event) => 
                        setElectionForm(prev => ({
                            ...prev, 
                            candidateName: [...prev.candidateName,  event?.target.value]}))
                    }
                        />
                    </div>}
                    )
                })
            }
        </>
    )
}

export default AddInput;