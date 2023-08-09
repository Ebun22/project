import Image from "next/image";
import React from "react";

const Dashboard = () => {

    return (
        <div className="text-white flex flex-row">
            <div className="fixed h-full w-52 bg-red-500 px-6 flex flex-col mx-auto align-center">
                <div className='flex flex-col mx-auto'>
                <Image
                src=""
                width="100"
                height="100"
                />
                
                </div>
                <p>UserId: <span>19/52HA109</span></p>

                <div className="mt-24 text-center">
                    <p className="p-4">Home</p>
                    <p className="p-4">Result</p>
                </div>
            </div>
           <div className="grow h-screen bg-white">
        <div className="py-10">
            <h1>Welcome UserName</h1>
        </div>
           </div>
           
        </div>
    )
}

export default Dashboard