"use client"
import Image from "next/image";
import user from "../images/user.png"
import React, { useRef } from "react";
import { MdHowToVote } from 'react-icons/md';
import { AiOutlineUser, AiOutlineHome, AiFillPieChart } from 'react-icons/ai';
import { Votes } from "../components";
import { useStoreContext } from "../context/Context";

const Dashboard = () => {
    const { electionForm, addInput, homeRef, ballotRef, resultRef, showHome, showNewBallot, showResult, handleAddInput, setElectionForm, handleHome, handleNewBallot, handleResult } = useStoreContext()
    return (
        <div className="text-white flex flex-rows">
            <div className="min-h-full w-52 bg-blue-950 flex flex-col mx-auto align-center">
                <p className="font-bold text-base text-center px-4 py-6">E-Voting System</p>
                <div className="flex flex-row px-6 space-x-4 ">

                    <AiOutlineUser className="text-6xl font-extralight" />

                    <div className="text-xs text-center mt-2">
                        <p className="text-lg font-bold">Segun</p>
                        <p className="text-xs text-neutral-200">19/52HA109</p>
                    </div>
                </div>


                <div className="mt-24 text-left">
                    <p
                        ref={homeRef}
                        className="py-4 mb-4 flex flex-row px-6 space-x-6 focus:bg-slate-900 focus:border-l-solid focus:border-l-4 focus:border-l-sky-500 "
                        tabIndex={0}
                        onClick={() => handleHome(homeRef)}
                    >
                        <span className="h-3.5 mr-2 text-lg mt-px"><AiOutlineHome /></span>
                        Home
                    </p>

                    <p
                        ref={ballotRef}
                        className="flex flex-row px-6 py-4 my-4 space-x-4 focus:bg-slate-900 focus:border-l-solid focus:border-l-4 focus:border-l-sky-500"
                        tabIndex={0}
                        onClick={() => handleNewBallot(ballotRef)}
                    >
                        <span className="h-3.5 mr-2 text-lg mt-px"><MdHowToVote /></span>
                        Ongoing Ballots
                    </p>

                    <p
                        ref={resultRef}
                        className="py-4 flex px-6 flex-row space-x-4 focus:bg-slate-900 focus:border-l-solid focus:border-l-4 focus:border-l-sky-500"
                        tabIndex={0}
                        onClick={() => handleResult(resultRef)}
                    >
                        <span className="h-3.5 mr-2 text-lg mt-px"><AiFillPieChart /></span>
                        Results
                    </p>
                </div>

            </div>

            <div className="h-screen text-black bg-white w-full p-10">
                <div className="py-10 ">
                    <h1 className="text-black text-4xl font-bold">Welcome UserName</h1>
                </div>
                <div className="flex flex-rows">
                    <div className="rounded-lg p-4 bg-blue-950 text-white mr-24">
                        <p>8</p>
                        <p>Total Number of active voters</p>
                    </div>
                    <div className='rounded-lg p-4 bg-blue-950 text-white'>
                        <p className="">4</p>
                        <p>Total number of candidates</p></div>
                </div>
                <div className="mt-16">
                    <Votes />
                </div>
            </div>



        </div >
    )
}

export default Dashboard