import Image from "next/image";
import user from "../images/user.png"
import React from "react";
import { Votes } from "../components";

const Dashboard = () => {

    return (
        <div className="text-white flex flex-rows">
            <div className=" w-52 bg-blue-950 px-6 flex flex-col mx-auto align-center">
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
                    <p>Current Elections</p>
                    <p className="py-4">Result</p>
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

           

        </div>
    )
}

export default Dashboard