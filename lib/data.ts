import React from "react";
import { FaAws, FaLock } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { FaBarsProgress, FaBlog, FaBots } from "react-icons/fa6";

import paytmSingup from "@/public/Paytm_singup.png";
import nural from "@/public/nural.jpg";
import medium from "@/public/blog.png";
import seed from "@/public/php-encryption.jpg";
import prop from "@/public/prop1.jpeg";
import rtsp from "@/public/rtsp.jpg";
import doc from "@/public/doc.jpg";


export const links = [
    { name: "Home", hash: "#home" },
    { name: "About", hash: "#about" },
    { name: "Projects", hash: "#projects" },
    { name: "Skills", hash: "#skills" },
    { name: "Experience", hash: "#experience" },
    { name: "Contact", hash: "#contact" },
] as const;




export const experiencesData = [
    {
        title: "Prelexa - Document AI workflows",
        location: "Pune, India",
        description:
            "Lead development of AI workflows for document automation, overseeing architecture, coding, and deployment. Collaborated with cross-functional teams to ensure timely delivery and alignment with business goals.",
        icon: React.createElement(FaBarsProgress),
        date: "Nov 2025 - Feb 2026",
    },
    {
        title: "Trainee - Full stack Developer",
        location: "Pune, India",
        description:
            "Lead development of MVP for startup, overseeing architecture, coding, and deployment. Collaborated with cross-functional teams to ensure timely delivery and alignment with business goals.",
        icon: React.createElement(FaBarsProgress),
        date: "Aug 2025 - Nov 2025",
    },
    {
        title: "SDE Intern - Skylark Labs",
        location: "Pune, India",
        description:
            "Developed AI-powered authentication and real-time face detection systems, integrated with Django REST, WebRTC, and RTSP to enhance video streaming experiences.",
        icon: React.createElement(FaBarsProgress),
        date: "June - Aug 2025",
    },

    {
        title: "AWS- Data Engineering Internship",
        location: "Pune India",
        description:
            "Pursuing a data engineering internship focused on building robust data pipelines, optimizing ETL processes, and supporting data-driven decision-making.",
        icon: React.createElement(FaAws),
        date: "July - Sep 2024",
    },
    {
        title: "Paytm Clone - Full-Stack Application",
        location: "Pune India",
        description:
            "Features user sign-up, log-in, with OAuth validation, balance checks, fund transfers, and transaction views. Utilizes React for the frontend and Express.js for the backend.",
        icon: React.createElement(BsGraphUp),
        date: "Feb 2024 - Apr 2024",
    },
    {
        title: "Blogz for Devs- Inspired by Medium",
        location: "Pune",
        description:
            "Developed Blogging Platform Offers - Signin, Signup, Users can Create, Read, Update, Delete their blogs.",
        icon: React.createElement(FaBlog),
        date: "Dec 2023 - Jan 2024",
    },
    {
        title: "EthWallet - Ethereum & Solana HD Wallet Generator",
        location: "Pune, India",
        description:
            "EthWallet is a secure solution for generating and managing Ethereum and Solana HD wallets from a single mnemonic phrase. Built with React for a responsive UI, it uses Ethers.js for Ethereum interaction, BIP39 for mnemonic security, and Web3.js for smooth blockchain integration and transaction management.",
        icon: React.createElement(FaLock),
        date: "2024",
    },
] as const;

export const projectsData = [
    {
        title: "Prelexa - Document AI workflows",
        description:
            "Built a system to convert legal documents into reusable templates, extract key variables, and generate complete drafts via an intelligent chat-based workflow",
        tags: ["Python", "FastApi", "NextJs", "Gemini API", "exa.ai"],
        imageUrl: doc,
        link: "https://www.prescalelabs.com",
        githuburl: "https://github.com/Praxxav/prelexa-fe"
    },
    {
        title: "RTSP Face Detection System",
        description:
            "Developed AI-powered authentication and real-time face detection systems, integrated with Django REST,and RTSP to enhance video streaming experiences.",
        tags: ["Python", "Django Rest Framework", "RTSP", "AI"],
        imageUrl: rtsp,
        link: "",
        githuburl: "https://github.com/Praxxav/RTSP_face_detection"
    },
    {
        title: "PropTradx-Prop trading platform",
        description:
            "PropTradX is a proprietary trading platform for Forex a simulated funding model.",
        tags: ["NextJs", "NodeJs", "Postgresql", "Tailwind", "OAuth", "razorpay"],
        imageUrl: prop,
        link: "https://proptradx.netlify.app/",
        githuburl: "https://github.com/Praxxav/PropTradx"
    },
    {
        title: "Paytm Clone - Full-Stack Application",
        description:
            "Features user sign-up, log-in, with OAuth validation, balance checks, fund transfers, and transaction views. Utilizes Nextjs, webpacks",
        tags: ["Nextjs", "Node", "Postgresql", "Tailwind", "Prisma", "Oauth", ""],
        imageUrl: paytmSingup,
        link: "",
        githuburl: "https://github.com/Praxxav/paytm_wallet"
    },
    {
        title: "Neural-Nexus",
        description:
            "Nuro! bot that can converse about anything! Can check answers of a topic! Can play Rock-paper-Scissors, Toss - Heads or Tails.",
        tags: ["Machine Learning", "LangChain", "Python", "LLMs", "SQL(Postgres)", "pycord", "alembic"],
        imageUrl: nural,
        link: "",
        githuburl: "https://github.com/Praxxav/Nuro"
    },
    {
        title: "Blogz for Devs- Inspired by Medium",
        description:
            "Blogging Platform Offers - Signin, Signup, Users can Create, Read, Update, Delete their blogs.",
        tags: ["Cloudflare Workers", "TypeScript", "Hono", "Prisma", "Postgres", "JWT"],
        imageUrl: medium,
        link: "",
        githuburl: "https://github.com/Praxxav/Medium-blogs"
    },
    {
        title: "EthWallet - Ethereum & Solana HD Wallet Generator",
        description:
            "Generating and managing Ethereum and Solana HD wallets from a mnemonic phrase.",
        tags: ["React", "Ethers.js", "BIP39", "Web3"],
        imageUrl: seed,
        link: "https://memonic-phrase-to-wallet.vercel.app/",
        githuburl: ""
    },

] as const;

export const skillsData = [
    "TypeScript", "React", "Node.js", "Git", "Tailwind", "Prisma", "AWS Services (S3, Lambda, EC2, IAM, CloudWatch, Glue, Athena, RDS,VPC)", "HTML", "CSS", "JavaScript", "MongoDB",
    "Docker", "Express", "Framer Motion", "PostgreSQL", "Cloudflare",

    "Linux", "Shell Scripting", "Machine Learning",
] as const;


