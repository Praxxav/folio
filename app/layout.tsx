import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Headers } from "../components/header";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from '../context/active-section-context'

const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: "Pranav Kulkarni — DevOps Engineer",
  description: "Pranav Kulkarni — DevOps Engineer I at Aleph Technologies | Azure, AKS, Kubernetes, Docker, CI/CD, Prometheus, Grafana",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 min-h-screen overflow-x-hidden`}
      >
        {/* Ambient gradient wash — cool DevOps palette */}
        <div className="bg-[#d6f1ec] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="bg-[#dbe6fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        {/* Subtle grid texture */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-grid-faint [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"></div>
        <ActiveSectionContextProvider >
          <Headers />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}

