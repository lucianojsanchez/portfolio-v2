"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa';

import { Link } from "react-scroll";



const NavBar = () => {


    const [active, setActive] = useState('');
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    //------------------------------------------------------------//


    useEffect(() => {
        const options = {
            duration: 250,
            offset: -50,
            smooth: false,
        };
        const scroll = new Link('about', options);
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY + 120;
            const projects = document.getElementById('projects');
            const technologies = document.getElementById('technologies');
            const about = document.getElementById('about');
            const contact = document.getElementById('contact');

            if (currentPosition >= contact.offsetTop) {
                setActive('contact');
            } else if (currentPosition >= about.offsetTop) {
                setActive('about');
            } else if (currentPosition >= technologies.offsetTop) {
                setActive('technologies');
            } else if (currentPosition >= projects.offsetTop) {
                setActive('projects');
            } else {
                setActive('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    //------------------------------------------------------------//


    return (
        <nav
            className="flex items-center justify-between flex-wrap p-4 fixed w-full z-20 backdrop-blur-sm bg-slate-500/30"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.75) 0px 10px 30px -10px' }}
        >
            <div className="flex items-center mr-auto">
                <div className="mr-6">
                    <Link
                        to="presentation"
                        className="flex items-center cursor-pointer"
                        smooth={true}
                        duration={650}
                    >
                        <div>
                            <Image
                                src="/logo.svg"
                                width={40}
                                height={40}
                                className="filter invert text-white mr-1"
                                style={{ fill: "white" }}
                            />
                        </div>
                        <span className="text-2xl font-semibold dark:text-white text-white">Luciano</span>
                    </Link>
                </div>
            </div>
            <div className="block md:hidden">
                <button
                    onClick={toggleMenu}
                    className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-blue-400 hover:border-white"
                >
                    <FaBars className='text-gray-200' />
                </button>
            </div>
            <div className={`items-center justify-between w-full md:flex md:w-auto md:order-0 ${showMenu ? '' : 'hidden'}`}>
                <div className=" items-center justify-center">
                    <ul className="flex flex-wrap md:justify-center max-md:flex-col font-bold ml-auto lg:ml-4 xl:mr-[200px] lg:text-lg">
                        <li>
                            <Link to="projects" className={`block mt-4 md:inline-block md:mt-0 hover:text-[#515aff] mr-4 cursor-pointer ${active === 'projects' ? 'text-[#515aff]' : 'text-gray-200'}`} smooth={true} duration={650} onClick={() => setShowMenu(false)}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="technologies" className={`block mt-4 md:inline-block md:mt-0  hover:text-[#515aff] mr-4 cursor-pointer ${active === 'technologies' ? 'text-[#515aff]' : 'text-gray-200'}`}
                                smooth={true}
                                duration={650}
                                onClick={() => setShowMenu(false)}
                            >
                                Technologies
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="about"
                                className={`block mt-4 md:inline-block md:mt-0  hover:text-[#515aff] mr-4 cursor-pointer ${active === 'about' ? "text-[#515aff]" : 'text-gray-200'}`}
                                smooth={true}
                                duration={650}
                                onClick={() => setShowMenu(false)}
                            >
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="contact"
                                className={`block mt-4 md:inline-block md:mt-0  hover:text-[#515aff] mr-4 cursor-pointer ${active === 'contact' ? 'text-[#515aff]' : 'text-gray-200'}`}
                                smooth={true}
                                duration={650}
                                onClick={() => setShowMenu(false)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;


{/* <Link
to="about"
className={`block mt-4 md:inline-block md:mt-0 text-gray-200 hover:text-blue-400 mr-4 cursor-pointer ${active === 'about' ? 'text-blue-400' : ''}`}
smooth={true}
duration={650}
onClick={() => setShowMenu(false)}
>
About Me
</Link>
</li>
<li>
<Link
to="contact"
className={`block mt-4 md:inline-block md:mt-0 text-gray-200 hover:text-blue-400 mr-4 cursor-pointer ${active === 'contact' ? 'text-blue-400' : ''}`}
smooth={true}
duration={650}
onClick={() => setShowMenu(false)}
>
Contact
</Link> */}