import React from "react";
import { useStoreContext } from "../context/Context";

const Vote = () => {

    const { candidateData, handleVotes } = useStoreContext()
    return (
        <>
            <div className="text-white">
                <p>Vote for your president</p>
                {candidateData?.map((person, key) => (
                    <div key={key}>
                        <input type="checkbox" value={person} onChange={(event) => handleVotes(event)}/><label>{person}</label>
                    </div>
                ))}
            </div>


        </>
    )
}

export default Vote