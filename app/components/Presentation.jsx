import React from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi';


const Presentation = () => {
    return (

        <div className="flex flex-col h-screen justify-center items-start mx-auto max-w-screen-xl max-xl:max-w-[80%]">


            <div>
                <p className="xl:text-xl sm:text-xl font-semibold text-gray-300 mb-4">¡Hello there👋!, I'm</p>
                <h1 className="xl:text-8xl lg:text-7xl md:text-5xl max-sm:text-6xl max-[375px]:text-[48px] font-bold text-gradient bg-gradient-to-tr from-[#FF0080] to-[#8A2BE2] text-transparent bg-clip-text mb-6 max-w-full ">Luciano Sanchez</h1>
                <p className='xl:text-md sm:text-xl font-semibold text-gray-300 max-w-4xl mb-4 max-[375px]:text-sm'>FULLSTACK DEVELOPER</p>
                <p className="xl:text-xl sm:text-xl font-semibold text-gray-300 max-w-4xl max-[375px]:text-sm">As a proactive and detail-oriented developer, I am passionate about building user-friendly and functional web applications. </p>
                <p className="xl:text-xl sm:text-xl font-semibold text-gray-500 max-w-4xl mb-1 max-[375px]:text-sm">
                    I am eager to join a team where I can learn, grow, and contribute my skills to create high-quality software solutions.
                </p>
                <div className="mt-8 relative">
                    <div className="flex items-center">
                        <a href="https://drive.google.com/drive/u/2/folders/156t5f2oufgfcSaA1C-uoa7RoQaUhDVNA" className="border-2 border-blue-300 hover:bg-blue-400 hover:text-white text-blue-300 font-bold py-3 px-5 rounded-lg flex items-center max-sm:text-xs shadow-lg shadow-blue-500/30">
                            Resume
                        </a>
                        <div className="flex items-center ml-4">
                            <a href="https://www.github.com/lucianojsanchez/">
                                <FiGithub className="text-white text-2xl mx-2 w-8 h-8 transition ease-in-out duration-500 hover:-translate-y-1 hover:text-blue-300" />
                            </a>
                            <a href="https://www.linkedin.com/in/lucianojsanchez/">
                                <FiLinkedin className="text-white text-2xl mx-2 w-8 h-8 transition ease-in-out duration-500 hover:-translate-y-1 hover:text-blue-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Presentation