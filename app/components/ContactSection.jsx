import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaFilePdf, FaTwitter } from 'react-icons/fa';


// a recreation of my old portfolio contact component =)

const ContactSection = () => {
    return (
        <div className="bg-slate-900 py-12 rounded-lg shadow-lg shadow-slate-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 max-xs:grid-cols-1 gap-6">
                    <div className="max-w-xs bg-slate-700 overflow-hidden shadow rounded-lg">
                        <a href="mailto:lucianojoelsanchez@gmail.com" className="hover:text-blue-400">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex max-xl:flex-col items-center">

                                    <div className="flex-shrink-0 ">
                                        <a href="mailto:lucianojoelsanchez@gmail.com" className="hover:text-blue-400">
                                            <FaEnvelope className="transition ease-in-out duration-500 hover:-translate-y-1 hover:text-blue-300 text-center w-12 h-12 text-white" />
                                        </a>
                                    </div>

                                    <div className="ml-4 max-xl:text-center max-xl:ml-0">
                                        <a href="mailto:lucianojoelsanchez@gmail.com" className="hover:text-blue-400">
                                            <h3 className="text-lg font-bold text-white">Email</h3>
                                        </a>
                                        <div className="mt-2 min-[1024px]:text-[9px] min-[1280px]:text-[11.5px] text-[6px] max-[425px]:text-[8px] max-[320px]:text-[5px] max-[375px]:text-[7px] font-medium text-white">
                                            <a href="mailto:lucianojoelsanchez@gmail.com" className="hover:text-blue-400">lucianojoelsanchez@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="max-w-xs bg-slate-700 overflow-hidden shadow rounded-lg">
                        <a href="https://github.com/lucianojsanchez" className="hover:text-blue-400">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex max-xl:flex-col items-center">

                                    <div className="flex-shrink-0 ">
                                        <a href="https://github.com/lucianojsanchez" className="hover:text-blue-400">
                                            <FaGithub className="transition ease-in-out duration-500 hover:-translate-y-1 hover:text-blue-300 text-center w-12 h-12 text-white" />
                                        </a>
                                    </div>

                                    <div className="ml-4 max-xl:text-center max-xl:ml-0">
                                        <a href="https://github.com/lucianojsanchez" className="hover:text-blue-400">
                                            <h3 className="text-lg font-bold text-white">GitHub</h3>
                                        </a>
                                        <div className="mt-2 text-base max-lg:text-[10.5px] font-medium text-white max-[375px]:text-[9px]">
                                            <a href="https://github.com/lucianojsanchez" className="hover:text-blue-400">@lucianojsanchez</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="max-w-xs bg-slate-700 overflow-hidden shadow rounded-lg">
                        <a href="https://www.linkedin.com/in/lucianojsanchez/" className="hover:text-blue-400">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex max-xl:flex-col items-center">

                                    <div className="flex-shrink-0 ">
                                        <a href="https://www.linkedin.com/in/lucianojsanchez/" className="hover:text-blue-400">
                                            <FaLinkedin className="transition ease-in-out duration-500 hover:-translate-y-1 hover:text-blue-300 text-center w-12 h-12 text-white" />
                                        </a>
                                    </div>

                                    <div className="ml-4 max-xl:text-center max-xl:ml-0">
                                        <a href="https://www.linkedin.com/in/lucianojsanchez/" className="hover:text-blue-400">
                                            <h3 className="text-lg font-bold text-white">LinkedIn</h3>
                                        </a>
                                        <div className="mt-2 text-base max-lg:text-[10.5px] font-medium text-white max-[375px]:text-[9px]">
                                            <a href="https://www.linkedin.com/in/lucianojsanchez/" className="hover:text-blue-400">@lucianojsanchez</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="max-w-xs bg-slate-700 overflow-hidden shadow rounded-lg">
                        <a href="https://wa.link/m8rzyf" className="hover:text-blue-400">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex max-xl:flex-col items-center">
                                    <div className="flex-shrink-0 ">
                                        <a href="https://wa.link/m8rzyf" className="hover:text-blue-400">
                                            <FaWhatsapp className="transition ease-in-out duration-500 hover:-translate-y-1 hover:text-blue-300 text-center w-12 h-12 text-white" />
                                        </a>
                                    </div>

                                    <div className="ml-4 max-xl:text-center max-xl:ml-0">
                                        <a href="https://wa.link/m8rzyf" className="hover:text-blue-400">
                                            <h3 className="text-lg font-bold text-white">Whatsapp</h3>
                                        </a>
                                        <div className="mt-2 text-base max-lg:text-[9px] font-medium text-white">
                                            <a href="https://wa.link/m8rzyf" className="hover:text-blue-400">+54 9 3816 24-1914</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="max-w-xs bg-slate-700 overflow-hidden shadow rounded-lg">
                        <a href="https://drive.google.com/drive/u/2/folders/156t5f2oufgfcSaA1C-uoa7RoQaUhDVNA" className="hover:text-blue-400">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex max-xl:flex-col items-center">

                                    <div className="flex-shrink-0 ">
                                        <a href="https://drive.google.com/drive/u/2/folders/156t5f2oufgfcSaA1C-uoa7RoQaUhDVNA" className="hover:text-blue-400">
                                            <FaFilePdf className="transition ease-in-out duration-500 hover:-translate-y-1 hover:text-blue-300 text-center w-12 h-12 text-white" />
                                        </a>
                                    </div>

                                    <div className="ml-4 max-xl:text-center max-xl:ml-0">
                                        <a href="https://drive.google.com/drive/u/2/folders/156t5f2oufgfcSaA1C-uoa7RoQaUhDVNA" className="hover:text-blue-400">
                                            <h3 className="text-lg font-bold text-white">Resume</h3>
                                        </a>
                                        <div className="mt-2 text-base max-lg:text-[10px] font-medium text-white">
                                            <a href="https://drive.google.com/drive/u/2/folders/156t5f2oufgfcSaA1C-uoa7RoQaUhDVNA" className="hover:text-blue-400">[ES - EN - PT]</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="max-w-xs bg-slate-700 overflow-hidden shadow rounded-lg">
                        <a href="https://twitter.com/lusa_dev" className="hover:text-blue-400 ">
                            <div className="px-4 py-5 sm:p-6 w-fit">
                                <div className="flex max-xl:flex-col items-center w-fit">
                                    <div className="flex-shrink-0 ">
                                        <a href="https://twitter.com/lusa_dev" className="hover:text-blue-400">
                                            <FaTwitter className="transition ease-in-out duration-500 hover:-translate-y-1 hover:text-blue-300 text-center w-12 h-12 text-white" />
                                        </a>
                                    </div>

                                    <div className="ml-4 max-xl:text-center max-xl:ml-0">
                                        <a href="https://twitter.com/lusa_dev" className="hover:text-blue-400">
                                            <h3 className="text-lg font-bold text-white">Twitter</h3>
                                        </a>
                                        <div className="mt-2 text-base max-lg:text-xs font-medium text-white">
                                            <a href="https://twitter.com/lusa_dev" className="hover:text-blue-400">@lusa_dev</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection
