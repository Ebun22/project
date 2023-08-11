"use client"
import React from "react";
import { Votes, AddInput } from "@/app/components";
import { useStoreContext } from "@/app/context/Context";


const UploadElection = () => {

    const { electionForm, addInput, handleAddInput, setElectionForm } = useStoreContext()
    const { title, about, numOfCandidates, candidateName } = electionForm
    return (
       
                <div className="h-full w-3/4">
                    <h1 className='font-bold text-3xl mb-6'>Start a new election</h1>
                    <form>
                        <div className="mt-4 flex flex-col">
                            <label htmlFor="election_title" className="font-bold">Election Title:</label>
                            <input
                                type="text"
                                value={title}
                                required
                                name="election_title"
                                className="mt-2 rounded-lg pl-4 border-2 border-solid border-black "
                                onChange={(event) => setElectionForm(prev => ({ ...prev, title: event?.target.value }))} />
                        </div>

                        <div className="mt-4 flex flex-col">
                            <label htmlFor="num_of_candidates" className="font-bold">Number of Candidates:</label>
                            <input type="text"
                                value={numOfCandidates}
                                required
                                name="num_of_candidates"
                                className="mt-2 rounded-lg pl-4 border-2 border-solid border-black "
                                onChange={(event) => setElectionForm(prev => ({ ...prev, numOfCandidates: event?.target.value }))} />
                        </div>

                        <div className="mt-4 flex flex-col">
                            <label htmlFor="candidates_name" className="font-bold">Candidate's Name: </label>
                            <input
                                type="text"
                                value={candidateName}
                                required
                                name="candidates_name"
                                className="mt-2 rounded-lg pl-4 border-2 border-solid border-black"
                                onChange={(event) =>
                                    setElectionForm(prev => ({
                                        ...prev,
                                        candidateName: [...prev.candidateName, event?.target.value]
                                    }))
                                }
                            />
                        </div>
                        <AddInput />
                        <button
                            type="button"
                            className="rounded-lg bg-blue-950 mt-6 text-white p-2"
                            onClick={handleAddInput}
                        >Add Candidate</button>

                        <div className="mt-4 flex flex-col">
                            <label htmlFor="about" className="font-bold">About position</label>
                            <textarea
                                value={about}
                                name="about"
                                required
                                className="mt-2 rounded-lg pl-4 border-2 border-solid border-black"
                                onChange={(event) => setElectionForm(prev => ({ ...prev, about: event?.target.value }))} />
                        </div>
                    </form>
                    <div className='flex flex-row justify-center mt-6 space-x-12'>
                        <button type="button" className="rounded-lg bg-blue-950 mt-6 text-white p-2">Add New Election</button>
                        <button type="button" className="rounded-lg bg-blue-950 mt-6 text-white p-2">Submit Election</button>
                    </div>
                </div>

    )
}

export default UploadElection