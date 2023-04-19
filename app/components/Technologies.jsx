"use client"

import React from 'react'
import { frontendTech } from '../constants/TechList'
import { useState } from 'react';


const Technologies = () => {
    const [showGrid, setShowGrid] = useState(false);

    const handleToggleGrid = () => {
        setShowGrid(!showGrid);
    };


    return (
        <div className="my-8 mx-auto max-w-screen-xl" id="technologies">
            <div className="flex items-center my-10 mx-auto max-w-screen-xl">
                <h1 className="text-4xl md:text-6xl font-bold text-gradient bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent leading-tight align-middle py-2 pl-4 pr-8">
                    Technologies
                </h1>
                <div className="h-1 bg-gray-400/20 flex-1 mx-5"></div>
            </div>
            <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-14 mx-auto max-w-screen-xl max-xl:max-w-[80%] max-sm:max-w-[95%] justify-items-center">
                <div>
                    <h1 className="text-2xl font-bold mb-3 text-center">FrontEnd</h1>
                    <div className={`grid grid-cols-3 gap-7 py-10 w-full h-full ${showGrid ? "grid" : "hidden md:grid"}`}>
                        {frontendTech.map((tech, index) => (
                            <div key={index} className="flex flex-col items-center bg-slate-900 rounded-xl">
                                <div className="my-3 ">{tech.icon}</div>
                                <div className="bg-slate-700 w-full h-full rounded-lg ">
                                    <p className="text-white font-bold text-sm text-center my-1 px-2 max-xl:text-xs">{tech.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="md:hidden bg-gray-800 p-2 rounded-lg cursor-pointer z-10"
                            onClick={handleToggleGrid}
                        >
                            {showGrid ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-3 text-center">Backend</h1>
                    <div className={`grid grid-cols-3 gap-7 py-10 w-full h-full ${showGrid ? "grid" : "hidden md:grid"}`}>
                        {frontendTech.map((tech, index) => (
                            <div key={index} className="flex flex-col items-center bg-slate-900 rounded-xl">
                                <div className="my-3 ">{tech.icon}</div>
                                <div className="bg-slate-700 w-full h-full rounded-lg ">
                                    <p className="text-white font-bold text-sm text-center my-1 px-2 max-xl:text-xs">{tech.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="md:hidden bg-gray-800 p-2 rounded-lg cursor-pointer z-10"
                            onClick={handleToggleGrid}
                        >
                            {showGrid ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-3">Tools</h1>
                </div>
            </div>
        </div>
    );
}

export default Technologies