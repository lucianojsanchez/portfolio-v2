import "./globals.css";
import NavBar from "./components/NavBar";
import { Space_Grotesk } from "next/font/google";

export const metadata = {
  title: "Luciano's Portfolio",
  description: "Made with 🩶",
};

const spacegrotestk = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scroll-behavior: smooth">
        <header className={spacegrotestk.className}>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
