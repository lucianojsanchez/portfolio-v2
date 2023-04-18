import React from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Presentation = () => {
    return (
        <div className="flex flex-col h-screen justify-center items-start mx-auto max-w-screen-xl max-xl:max-w-[80%]">
            <div>
                <p className="xl:text-xl sm:text-xl font-semibold text-gray-300 mb-4">¡Hello there👋!, I'm</p>
                <h1 className="xl:text-8xl lg:text-7xl md:text-5xl max-sm:text-4xl max-[375px]:text-2xl font-bold text-gradient bg-gradient-to-tr from-[#ab004d] to-[#7F00FF] text-transparent bg-clip-text mb-6 ">Luciano Sanchez</h1>
                <p className='xl:text-md sm:text-xl font-semibold text-gray-300 max-w-4xl mb-4'>FULLSTACK DEVELOPER</p>
                <p className="xl:text-xl sm:text-xl font-semibold text-gray-300 max-w-4xl">As a proactive and detail-oriented developer, I am passionate about building user-friendly and functional web applications. </p>
                <p className="xl:text-xl sm:text-xl font-semibold text-gray-500 max-w-4xl mb-1">
                    I am eager to join a team where I can learn, grow, and contribute my skills to create high-quality software solutions.
                </p>
                <div className="mt-8 relative">
                    <div className="flex items-center">
                        <a href="[link al contacto]" className="border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-bold py-3 px-5 rounded-lg flex items-center max-sm:text-xs">
                            Contact Me
                        </a>
                        <div className="flex items-center ml-4">
                            <FiGithub className="text-white text-2xl mx-2" />
                            <FiLinkedin className="text-white text-2xl mx-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation