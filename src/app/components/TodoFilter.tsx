"use client"

import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import React from 'react';
import { useStoreContext } from '../context/Context';

const TodoFilter = () => {

    const { setFilter } = useStoreContext();

    const searchParams = useSearchParams();
    const params = searchParams.get('')
    
    return (
        <>
            <div className="rounded-lg flex items-stretch flex-row w-full mx-auto shadow-lg mb-4 bg-white ">
                <div className="grow p-4 bg-black text-center text-white rounded-lg">
                    <Link href="/?=All_todos" onClick={() => setFilter(params)}>All Todos</Link>
                </div>
                <div className="grow text-center p-4">
                    <Link href="/?=pending" onClick={() => setFilter(params)}>Pending</Link>
                </div>
                <div className="grow text-center p-4">
                    <Link href="/?=completed" onClick={() => setFilter(params)}>Completed</Link>
                </div>

            </div>
        </>
    )
}

export default TodoFilter;