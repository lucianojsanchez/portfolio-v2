import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "Luciano's Portfolio",
  description: "Made with 🩶",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
