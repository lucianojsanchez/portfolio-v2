import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        name: 'Videogames Page (RAWG Api)',
        image: '/rawg.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel interdum sapien. Nunc eu nunc auctor, pharetra augue at, tempus massa.',
        link: '#',
        stack: ["React", "Redux", "PostgreSQL", "Node", "CSS Modules", "Express"],
        githubLink: "https://github.com/felduque/lookingplace",
    },
    {
        name: 'Looking Place (Booking For Hikers)',
        image: '/looking.png',
        description: 'Praesent feugiat est ac nisi tincidunt, quis volutpat nunc sollicitudin. Ut hendrerit ultrices odio, ut bibendum mi placerat a.',
        link: '#',
        stack: ["React", "Redux Toolkit", "PostgreSQL", "Node", "Bulma", "Express", "Firebase"],
        githubLink: "https://github.com/felduque/lookingplace",
        deployLink: "https://front-looking.vercel.app/",
    },
    {
        name: 'Personal Portfolio v1',
        image: '/pixel.png',
        description: 'Praesent feugiat est ac nisi tincidunt, quis volutpat nunc sollicitudin. Ut hendrerit ultrices odio, ut bibendum mi placerat a.',
        link: '#',
        stack: ["React", "React Router", "SASS", "CSS Modules", "Framer"],
        githubLink: "https://github.com/felduque/lookingplace",
        deployLink: "https://front-looking.vercel.app/",
    },
    {
        name: 'Pixel Dreams (Dall-E Clone)',
        image: '/pixel.png',
        description: 'Praesent feugiat est ac nisi tincidunt, quis volutpat nunc sollicitudin. Ut hendrerit ultrices odio, ut bibendum mi placerat a.',
        link: '#',
        stack: ["React", "React Router", "Redux", "MongoDB", "Mongoose", "Node", "TailwindCSS", "Cloudinary"],
        githubLink: "https://github.com/felduque/lookingplace",
        deployLink: "https://front-looking.vercel.app/",
    },
    {
        name: 'React Video Player',
        image: '/pixel.png',
        description: 'Praesent feugiat est ac nisi tincidunt, quis volutpat nunc sollicitudin. Ut hendrerit ultrices odio, ut bibendum mi placerat a.',
        link: '#',
        stack: ["React", "TailwindCSS"],
        githubLink: "https://github.com/felduque/lookingplace",
    },
    {
        name: 'Star Wars Battle',
        image: '/pixel.png',
        description: 'Praesent feugiat est ac nisi tincidunt, quis volutpat nunc sollicitudin. Ut hendrerit ultrices odio, ut bibendum mi placerat a.',
        link: '#',
        stack: ["Next.js", " React", "TailwindCSS"],
        githubLink: "https://github.com/felduque/lookingplace",
    },
    {
        name: 'Personal Portfolio v2 (Current)',
        image: '/pixel.png',
        description: 'Praesent feugiat est ac nisi tincidunt, quis volutpat nunc sollicitudin. Ut hendrerit ultrices odio, ut bibendum mi placerat a.',
        link: '#',
        stack: ["Next.js", " React", "TailwindCSS"],
        githubLink: "https://github.com/felduque/lookingplace",
    },
];


const ProjectCards = () => {
    return (
        <div className="mt-8 mb-8 mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 gap-8 mt-15 mx-auto max-w-screen-xl max-xl:max-w-[80%] ">
                {projects.map((project, index) => (
                    <div className=" rounded-lg shadow-md overflow-hidden flex items-center max-xl:flex-col max-xl:bg-slate-600 my-[7rem]" key={index}>
                        <div className="h-full xl:w-1/2 w-full object-cover">
                            <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="p-6 w-full xl:w-1/2 flex flex-col justify-between">
                            <h2 className="text-sm md:text-2xl font-medium mb-2 text-end max-xl:text-start max-sm:text-start">{project.name}</h2>
                            <p className="text-gray-700 mb-4 text-sm md:text-xl text-end max-sm:text-start">{project.description}</p>
                            <div className="flex flex-wrap mt-4 justify-end max-sm:justify-start">
                                {project.stack.map((tech, index) => (
                                    <span key={index} className="inline-flex items-center bg-gray-200 rounded-full px-3 py-1 text-md max-md:text-xs font-semibold text-gray-700 mr-2 mb-2">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center justify-end mt-5">
                                {project.githubLink && (
                                    <a href={project.githubLink} className="mx-2 w-5 h-5" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className='w-5 h-5' />
                                    </a>
                                )}
                                {project.deployLink && (
                                    <a href={project.deployLink} className="mx-2 " target="_blank" rel="noopener noreferrer">
                                        <FaExternalLinkAlt className='w-5 h-5' />
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