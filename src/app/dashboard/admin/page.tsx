"use client"
import Image from "next/image";
import user from "@/app/images/user.png"
import React from "react";
import { AiOutlineUser, AiOutlineHome, AiFillPieChart } from 'react-icons/ai';
import { MdHowToVote } from 'react-icons/md';
import { BsCheckCircleFill } from 'react-icons/bs';

import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';
import { Votes, AddInput, UploadElections, Header, Home } from "@/app/components";
import { useStoreContext } from "@/app/context/Context";




const Dashboard = () => {

    const { electionForm, addInput, handleAddInput, setElectionForm, handleHome, handleNewBallot, handleResult } = useStoreContext()
    const { title, about, numOfCandidates, candidateName } = electionForm
    return (
        <div className="text-white flex flex-rows">
            <div className="min-h-full w-52 bg-blue-950 px-6 flex flex-col mx-auto align-center">
                <p className="font-bold text-base text-center py-6">E-Voting System</p>
                <div className="flex flex-row space-x-4 ">

                    <AiOutlineUser className="text-6xl font-extralight" />

                    <div className="text-xs text-center mt-2">
                        <p className="text-lg font-bold">Segun</p>
                        <p className="text-xs text-neutral-200">19/52HA109</p>
                    </div>
                </div>


                <div className="mt-24 text-left">
                    <p className="py-4 flex flex-row space-x-6" onClick={(e: any) => handleHome(e)}>
                        <span className="h-3.5 mr-2 text-lg mt-px"><AiOutlineHome /></span>
                        Home
                    </p>

                    <p className=" flex flex-row space-x-4" onClick={(e: any) => handleNewBallot(e)}>
                        <span className="h-3.5 mr-2 text-lg mt-px"><MdHowToVote /></span>
                        Upload new Ballots
                    </p>

                    <p className="py-4 flex flex-row space-x-4" onClick={(e: any) => handleResult(e)}>
                        <span className="h-3.5 mr-2 text-lg mt-px"><AiFillPieChart /></span>
                        All ballots
                    </p>
                </div>
            </div>

            <div className="h-full text-black bg-white w-full p-10">
                <div className="py-10 ">
                    <h1 className="text-black text-4xl font-bold">Welcome Admin</h1>
                </div>
                <Home />
                {/* <Header /> */}
                {/* <UploadElections /> */}

            </div>



        </div>
    )
}

export default Dashboard