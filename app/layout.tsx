import type { Metadata } from "next";
import "./globals.css";
import { Headers } from "../components/header";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from '../context/active-section-context'

const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: "Pranav Kulkarni",
  description: "I am full stack developer & AWS cloud enthusiast ",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=' scroll-smooth'>
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5355978764450307"
     crossOrigin="anonymous"></script>
    
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 h-[6000px]`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider >
          <Headers />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
