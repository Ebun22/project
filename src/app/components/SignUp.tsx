import React from "react";
import { useStoreContext } from "../context/Context";

const SignUp = () => {
    const { setForm, form, setShowSignUp, handleFormSubmit } = useStoreContext();
    const { name, email, matric_No, password } = form;
    return (
        <div
            className='absolute z-10 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center w-full h-full items-center'>
            <div className=" w-2/4">
                <div className="p-5 border-solid text-white bg-black border-2 border-white rounded-lg ">

                    <div
                        className="w-6 text-center h-6 float-right cursor-pointer rounded-full border-solid border-2 border-white"
                        onClick={() => setShowSignUp(false)}
                    >
                        <p className='mb-2'>x</p>


                    </div>

                    <form className="">
                        <h1 className="font-bold text-4xl pb-6">SignUp</h1>
                        <div className="mb-10 flex flex-col">
                            <label htmlFor="name" className="font-bold">Name: </label>
                            <input type="text"
                                className="text-white bg-transparent mt-2 pl-2 border-b-2 border-slate-200 focus:outline-none"
                                value={name}
                                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                            />
                        </div>

                        <div className="mb-10 flex flex-col">
                            <label htmlFor="email" className="font-bold">Email: </label>
                            <input type="text"
                                value={email}
                                className="text-white bg-transparent mt-2 pl-2 border-b-2 border-slate-200 focus:outline-none"
                                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                            />
                        </div>

                        <div className="mb-10 flex flex-col">
                            <label htmlFor="matricNo" className="font-bold">Matric No: </label>
                            <input type="text"
                                value={matric_No}
                                className="text-white bg-transparent mt-2 pl-2 border-b-2 border-slate-200 focus:outline-none"
                                onChange={(event) => setForm((prev) => ({ ...prev, matric_No: event.target.value }))}
                            />
                        </div>

                        <div className="mb-10 flex flex-col">
                            <label htmlFor="password" className="font-bold">Password: </label>
                            <input type="password"
                                value={password}
                                className="text-white bg-transparent mt-2 pl-2 border-b-2 border-slate-200 focus:outline-none"
                                onChange={(event) => setForm((prev) => ({ ...prev, password: event.target.value }))}
                            />
                        </div>
                    </form>
                    <div>
                    <p className="py-4 text-sm text-right">Already have an account? <a>Login</a></p>
                        <button
                            type="button"
                            className="flex align-center m-auto text-center p-2 justify-center bg-white text-black"
                        onClick={(event) => handleFormSubmit(event)}
                        >
                          
                            Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUp;