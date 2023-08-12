import React from "react";
import { BsCheckCircleFill } from 'react-icons/bs';

const Header = () => {
    return (
        <div className="flex flex-rows">
            <div className="rounded-lg p-4 bg-blue-950 text-white mr-24">
                <p>8</p>
                <p>Total Number of active voters</p>
            </div>
            <div className='rounded-lg p-4 bg-blue-950 text-white'>
                <p className="">4</p>
                <p>Total number of candidates</p></div>
        </div>
    )
}

export default Header;