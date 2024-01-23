import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
// import Navbar from './Components/navbar2'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Random JS",
  description:
    "Welcome to Random JS - Your Ultimate Interview Preparation Hub! | 🚀Skills with Expertly Curated Interview Questions and Answers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
