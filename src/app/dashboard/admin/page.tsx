"use client"
import Image from "next/image";
import user from "@/app/images/user.png"
import React from "react";
import { Votes, AddInput } from "@/app/components";
import { useStoreContext } from "@/app/context/Context";


const Dashboard = () => {
 
    const {electionForm, addInput, handleAddInput, setElectionForm} = useStoreContext()
    const {title, about, numOfCandidates, candidateName} = electionForm
    return (
        <div className="text-white flex flex-rows">
            <div className="min-h-full w-52 bg-blue-950 px-6 flex flex-col mx-auto align-center">
                <div className='flex flex-col mx-auto'>
                    <Image
                        src={user}
                        alt="user logo"
                        width="100"
                        height="100"
                    />

                </div>
                <div className="text-xs text-center">
                    <p> Id: <span className="text-xs text-neutral-200">19/52HA109</span></p>
                </div>

                <div className="mt-24 text-left">
                    <p className="py-4">Home</p>
                    <p>Upload Elections</p>
                    <p className="py-4">Results</p>
                </div>
            </div>

            <div className="h-screen text-black bg-white w-full p-10">
                <div className="py-10 ">
                    <h1 className="text-black text-4xl font-bold">Welcome Admin</h1>
                </div>
                <div className="">
                    <form>
                        <div className="mt-4 flex flex-col">
                            <label htmlFor="election_title" className="font-bold">Election Title:</label>
                            <input 
                            type="text"
                            value={title} 
                            name="election_title"  
                            className="mt-2 rounded-lg pl-4 border-2 border-solid border-black "
                            onChange={(event) => setElectionForm(prev => ({...prev, title: event?.target.value}))}/>
                        </div>

                        <div className="mt-4 flex flex-col">
                            <label htmlFor="num_of_candidates" className="font-bold">Number of Candidates:</label>
                            <input type="text" 
                            value={numOfCandidates}
                            name="num_of_candidates"
                            className="mt-2 rounded-lg pl-4 border-2 border-solid border-black "
                            onChange={(event) => setElectionForm(prev => ({...prev, numOfCandidates: event?.target.value}))}/>
                        </div>
                        
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
                        </div>
                       { addInput && <AddInput />}
                        <button 
                        type="button" 
                        className="rounded-lg bg-blue-950 mt-6 text-white p-2"
                        onClick={handleAddInput}
                        >Add Candidate</button>

                        <div className="mt-4 flex flex-col">
                            <label htmlFor="about">About position</label>
                            <textarea  value={about} name="about"  onChange={(event) => setElectionForm(prev => ({...prev, about: event?.target.value}))}/>
                        </div>
                    </form>
                </div>

                <div className="mt-16">
                    <Votes />
                </div>
            </div>



        </div>
    )
}

export default Dashboard