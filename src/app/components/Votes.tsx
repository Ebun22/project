"use client"

import React from "react";
import { useStoreContext } from "../context/Context";

const Vote = () => {

    const { candidateData, handleVotes } = useStoreContext()
    return (
        <>
            <div className="text-black">
                <p className="font-bold">Who would you like to elect as NACOS President?</p>
                {candidateData?.map((person, key) => (
                    <div key={key}>
                        <input type="radio" name="elections" value={person} onChange={(event) => handleVotes(event)} />
                        <label htmlFor={person} className="pl-2">{person}</label>
                    </div>
                ))}
                <button
                    type="button"
                    className="rounded-lg bg-blue-950 p-2 mt-4 text-white font-bold "
                >
                    Submit</button>
            </div>


        </>
    )
}

export default Vote