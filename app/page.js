import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import { headers } from "next/dist/client/components/headers";
import Presentation from "./components/Presentation";
import ProjectCards from "./components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="px-4 w-full h-full flex flex-col items-center min-h-screen bg-gradient-to-tr from-[#140009] to-slate-900 from-5%">
      <div className="w-full">
        <Presentation />
      </div>
      <div className="w-full">
        <ProjectCards />
      </div>
    </main>
  );
}
