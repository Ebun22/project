import React from "react";
import { BsCheckCircleFill } from 'react-icons/bs';

const voted = () => {
    return (
        <div className="flex flex-col justify-center text-center mt-14">
            <p className="font-bold text-3xl">You've Successfully made your votes</p>
            <div className="m-auto my-10 text-8xl text-lime-500">
                <BsCheckCircleFill />
            </div>
            <button type="button" className="rounded-lg bg-blue-950 mt-6 text-white p-2 m-auto">See your votes</button>
        </div>
    )
}

export default voted;