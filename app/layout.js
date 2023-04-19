import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "Luciano's Portfolio",
  description: "Made with 🩶",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scroll-behavior: smooth">
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
