"use client"
import Image from "next/image";
import user from "@/app/images/user.png"
import React from "react";
import { AiOutlineUser, AiFillPieChart } from 'react-icons/ai';
import { MdHowToVote } from 'react-icons/md';
import { Votes, AddInput, UploadElections } from "@/app/components";
import { useStoreContext } from "@/app/context/Context";



const Dashboard = () => {

    const { electionForm, addInput, handleAddInput, setElectionForm } = useStoreContext()
    const { title, about, numOfCandidates, candidateName } = electionForm
    return (
        <div className="text-white flex flex-rows">
            <div className="min-h-full w-52 bg-blue-950 px-6 flex flex-col mx-auto align-center">
                <div className='flex flex-col mx-auto'>
                <AiOutlineUser 
                className="text-8xl font-extralight"
                />
                   
                </div>
                <div className="text-xs text-center">
                    <p> Id: <span className="text-xs text-neutral-200">19/52HA109</span></p>
                </div>

                <div className="mt-24 text-left">
                    <p className="py-4"><span></span>Home</p>
                    <p><span><MdHowToVote /></span>Ballots</p>
                    <p className="py-4"><span><AiFillPieChart /></span>Results</p>
                </div>
            </div>

            <div className="h-full text-black bg-white w-full p-10">
                <div className="py-10 ">
                    <h1 className="text-black text-4xl font-bold">Welcome Admin</h1>
                </div>
                <div className="flex flex-rows">
                    <div className="rounded-lg p-4 bg-blue-950 text-white mr-24">
                        <p>8</p>
                        <p>Total Number of active voters</p>
                        </div>
                    <div className='rounded-lg p-4 bg-blue-950 text-white'>
                        <p className="">4</p>
                        <p>Total number of Elections done</p></div>
                </div>
             <UploadElections />

            </div>



        </div>
    )
}

export default Dashboard