"use client"
import Image from 'next/image';
import home from '../images/home.png'
import React from 'react';
import { useStoreContext } from '../context/Context';
import { SignUp, Votes } from '.';

const LandingPage = () => {

    const { handleClick, showVote, showSignUp, setShowSignUp } = useStoreContext()

    return (
        <>
            {showSignUp &&
                <SignUp />}
            <div className="text-white mt-4 ml-16 mr-16 z-0">
                <div className="flex flex-row my-2">
                    <p className="grow my-2"><span>E</span>-voting</p>
                    <div className='rounded-lg grow text-right'>
                        <button
                            onClick={() => setShowSignUp(true)}
                            className='rounded-full p-2 px-6 border-solid border-2 border-white'
                        >SignUp</button>
                    </div>

                </div>
                <div className="flex flex-row">
                    <div>
                        <Image
                            src={home}
                            alt="voting"
                            width="500"
                            height="500"
                        />
                    </div>
                    <div>
                        <p className="text-8xl font-bold">
                            Now Everyone <br /> can vote
                        </p>
                        <p>Safe and secure voting process you can trust</p>
                        <button
                            type='button'
                            onClick={handleClick}
                            className='rounded-full p-2 px-6 border-solid border-2 border-white mt-8'>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LandingPage