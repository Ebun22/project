"use client"

import React, { useState, useEffect } from "react";
import { Header } from ".";
import { Bar } from 'react-chartjs-2';
import { useStoreContext } from "../context/Context";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



const Results = () => {

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Bar Chart of Result'
            }
        },
        responsive: true,
    }

    const labels = ['Tinubu', 'Asake', 'Atiku', 'Peter Obi']

    const data = {
        labels,
        datasets: [
            {
                label: "Elections Result",
                data: [2, 20, 4, 17],
                borderWidth: 1,
                height: '600px',
                width: '600px',
                backgroundColor: 'rgba(111, 164, 251, 0.5)',
            }
        ]
    }

    return (
        <div className="h-screen">
            <Header />
            <div >
                <Bar
                    options={options}
                    data={data}
                    className="mt-10 mx-auto"
                />
            </div>
            <div className="text-center mt-4">
                <p>According to the elections result, winner of this election is <b>Asake</b>.<br /> <b>Asake</b> is the president</p>
            </div>
        </div>
    )
}

export default Results;