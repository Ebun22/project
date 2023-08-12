import React from "react";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight} from 'react-icons/bi';

const Home = () => {
    return (
        <div className="h-screen mt-12 flex flex-col text-center text-4xl italic text-black">
                    <BiSolidQuoteAltLeft />
                    <p className= 'text-6xl text-gray-950'>You've been given the power to change your life, Take it.<br /> Vote for your Leaders</p>
                    
                    <div className="text-right flex justify-end" ><BiSolidQuoteAltRight /></div>
                </div>
    )
}

export default Home;