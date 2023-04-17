import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import { headers } from "next/dist/client/components/headers";
import Presentation from "./components/Presentation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" px-4 w-full h-full flex items-center min-h-screen bg-gradient-to-tr from-[#140009] to-slate-900 from-5%">
      <Presentation />
    </main>
  );
}
