import { Space_Grotesk } from "next/font/google";
import Presentation from "./components/Presentation";
import ProjectCards from "./components/Projects";
import Technologies from "./components/Technologies";
import AboutMe from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

const spacegrotestk = Space_Grotesk({
  weight: "700",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={spacegrotestk.className}>
      <NavBar />

      <main className="px-4 w-full h-full flex flex-col items-center min-h-screen bg-gradient-to-tr from-[#05001a] to-slate-900 from-5%">
        <div className="w-full" id="presentation">
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
