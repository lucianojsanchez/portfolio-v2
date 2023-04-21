"use client"

import React from 'react'
import { backendTech, frontendTech, tools } from '../constants/TechList'
import { useState } from 'react';
import { FaDatabase, FaReact, FaTools } from 'react-icons/fa';


const Technologies = () => {
    const [showFrontend, setShowFrontend] = useState(false);
    const [showBackend, setShowBackend] = useState(false);
    const [showTools, setShowTools] = useState(false);

    const handleToggleFrontend = () => {
        setShowFrontend(!showFrontend);
    };

    const handleToggleBackend = () => {
        setShowBackend(!showBackend);
    };

    const handleToggleTools = () => {
        setShowTools(!showTools);
    };




    return (
        <div className="my-8 mx-auto max-w-screen-xl">
            <div className="flex items-center my-20 mx-auto max-w-screen-xl">
                <h1 className="text-4xl md:text-6xl font-bold text-gradient bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent leading-tight align-middle py-2 pr-8">
                    Technologies
                </h1>
                <div className="h-1 bg-gray-400/20 flex-1 mx-5"></div>
            </div>
            <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-14 mx-auto max-w-screen-xl max-xl:max-w-[80%] max-sm:max-w-[95%] justify-items-center">
                <div>
                    <div className='flex flex-col items-center'>
                        <FaReact className='text-center mb-4 w-12 h-12' />
                        <h1 className="text-2xl font-bold mb-3 text-center">Frontend</h1>
                    </div>
                    <div className={`grid grid-cols-3 gap-7 py-10 w-full  ${showFrontend ? "grid" : "hidden md:grid"}`}>
                        {frontendTech.map((tech, index) => (
                            <div key={index} className="flex flex-col items-center bg-slate-900 rounded-xl">
                                <div className="my-3 ">{tech.icon}</div>
                                <div className="bg-slate-700 w-full  rounded-lg ">
                                    <p className="text-white font-bold text-sm text-center my-1 px-2 max-xl:text-xs">{tech.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="md:hidden bg-gray-800 p-2 rounded-lg cursor-pointer z-10"
                            onClick={handleToggleFrontend}
                        >
                            {showFrontend ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center'>
                        <FaDatabase className='text-center mb-4 w-12 h-12' />
                        <h1 className="text-2xl font-bold mb-3 text-center">Backend</h1>
                    </div>
                    <div className={`grid grid-cols-3 gap-7 py-10 w-full ${showBackend ? "grid" : "hidden md:grid"}`}>
                        {backendTech.map((tech, index) => (
                            <div key={index} className="flex flex-col items-center bg-slate-900 rounded-xl">
                                <div className="my-3 ">{tech.icon}</div>
                                <div className="bg-slate-700 w-full rounded-lg ">
                                    <p className="text-white font-bold text-sm text-center my-1 px-2 max-xl:text-xs">{tech.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="md:hidden bg-gray-800 p-2 rounded-lg cursor-pointer z-10"
                            onClick={handleToggleBackend}
                        >
                            {showBackend ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center'>
                        <FaTools className='text-center mb-4 w-12 h-12' />
                        <h1 className="text-2xl font-bold mb-3 text-center">Tools</h1>
                    </div>
                    <div className={`grid grid-cols-3 gap-7 py-10 w-full ${showTools ? "grid" : "hidden md:grid"}`}>
                        {tools.map((tool, index) => (
                            <div key={index} className="flex flex-col items-center bg-slate-900 rounded-xl">
                                <div className="my-3 ">{tool.icon}</div>
                                <div className="bg-slate-700 w-full rounded-lg ">
                                    <p className="text-white font-bold text-sm text-center my-1 px-2 max-xl:text-xs">{tool.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="md:hidden bg-gray-800 p-2 rounded-lg cursor-pointer z-10"
                            onClick={handleToggleTools}
                        >
                            {showTools ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies