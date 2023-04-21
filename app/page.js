import Image from "next/image";
import { Inter, Space_Grotesk } from "next/font/google";
import NavBar from "./components/NavBar";
import { headers } from "next/dist/client/components/headers";
import Presentation from "./components/Presentation";
import ProjectCards from "./components/Projects";
import Technologies from "./components/Technologies";
import AboutMe from "./components/About";
import Contact from "./components/Contact";

const spacegrotestk = Space_Grotesk({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={spacegrotestk.className}>
      <main className="px-4 w-full h-full flex flex-col items-center min-h-screen bg-gradient-to-tr from-[#17000a] to-slate-800 from-5%">
        <div className="w-full">
          <Presentation />
        </div>
        <div className="w-full" id="projects">
          <ProjectCards />
        </div>
        <div className="w-full" id="technologies">
          <Technologies />
        </div>
        <div className="w-full" id="about">
          <AboutMe />
        </div>
        <div className="w-full" id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}
