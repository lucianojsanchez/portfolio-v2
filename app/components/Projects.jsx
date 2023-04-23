
"use client"
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../constants/ProjectList';
import { useState } from 'react';




const ProjectCards = () => {
    const [isTouched, setIsTouched] = useState(false);

    const handleTouchStart = () => {
        setIsTouched(true);
    };

    const handleTouchEnd = () => {
        setIsTouched(false);
    };

    return (


        <div className="my-8 mx-auto max-w-screen-xl">
            <div className="flex items-center my-20 mx-auto max-w-screen-xl">
                <h1 className="text-4xl md:text-6xl font-bold text-gradient bg-gradient-to-r from-blue-300 to-fuchsia-800 bg-clip-text text-transparent leading-tight align-middle py-2 pr-8 ">Projects</h1>
                <div className="h-1 bg-gray-400/20 flex-1 mx-5 "></div>
            </div>
            <div className="grid grid-cols-1 gap-14 mx-auto max-w-screen-xl max-xl:max-w-[80%]">
                {projects.map((project, index) => (
                    <div className="rounded-lg overflow-hidden flex items-center max-xl:flex-col max-xl:bg-slate-700/60" key={index}>
                        <div className="h-full xl:w-1/2 w-full relative mx-8 transition ease-in-out duration-500 hover:translate-x-2">
                            <img src={project.image} alt={project.name} className="xl:rounded-lg h-full w-full object-cover drop-shadow-lg " />
                            <div className={`absolute inset-0 bg-slate-700/60 transition-opacity duration-400 ease-in-out ${isTouched ? 'opacity-0' : ''} hover:opacity-0`} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}></div>
                        </div>
                        <div className=" w-full xl:w-1/2 flex flex-col justify-between rounded-lg mx-8 my-5">
                            <h2 className="text-sm md:text-2xl font-bold mx-3 mb-3 text-end max-xl:text-start max-sm:text-start">{project.name}</h2>
                            <div className='xl:bg-slate-700/60 rounded-lg p-5'>
                                <p className="text-white/70 font-semibold mb-2 text-md text-end max-xl:text-start ">{project.description}</p>
                            </div>
                            <div className="flex flex-wrap mt-4 justify-end max-xl:justify-start mx-3">
                                {project.stack.map((tech, index) => (
                                    <span key={index} className="inline-flex items-center bg-gray-200 rounded-full max-xl:px-2 px-3 py-1 text-md max-md:text-xs  text-sm font-bold text-gray-700 mr-2 mb-2">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center justify-end max-xl:justify-center my-5 ">
                                {project.githubLink && (
                                    <a href={project.githubLink} className="mx-2 w-5 h-5 transition ease-in-out duration-500 hover:-translate-y-1 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className='w-7 h-7' />
                                    </a>
                                )}
                                {project.deployLink && (
                                    <a href={project.deployLink} className="mx-2 w-5 h-5 transition ease-in-out duration-500 hover:-translate-y-1 hover:text-blue-300" target="_blank" rel="noopener noreferrer">
                                        <FaExternalLinkAlt className='w-7 h-7' />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ProjectCards;