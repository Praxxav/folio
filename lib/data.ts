import React from "react";
import { FaAws,FaLock } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { FaBlog, FaBots } from "react-icons/fa6";

import paytmSingup from "@/public/Paytm_singup.png";
import nural from "@/public/nural.jpg";
import medium from "@/public/blog.png";
import seed from "@/public/php-encryption.jpg";
import prop from "@/public/prop1.jpeg";


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
        title: "AWS- Data Engineering Internship",
        location: "Pune India",
        description:
            "Pursuing a data engineering internship focused on building robust data pipelines, optimizing ETL processes, and supporting data-driven decision-making.",
        icon: React.createElement(FaAws),
        date: "July - Sep 2024",
    },
    {
        title: "Neural Nexus",
        location: "Pune India",
        description:
            "Developed bot that can converse about anything! Can check answers of a topic! Can play Rock-paper-Scissors, Toss - Heads or Tails",
        icon: React.createElement(FaBots),
        date: "Oct 2024 - Nov 2024",
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
        title: "PropTradx-Prop trading platform",
        description:
            "Features user sign-up, log-in, with OAuth validation, balance checks, fund transfers, and transaction views. Utilizes React for the frontend and Express.js for the backend.",
        tags: ["NextJs", "NodeJs", "Postgresql", "Tailwind", "OAuth",],
        imageUrl: prop,
        link: "https://proptradx.netlify.app/",
    },
    {
        title: "Paytm Clone - Full-Stack Application",
        description:
            "Features user sign-up, log-in, with OAuth validation, balance checks, fund transfers, and transaction views. Utilizes React for the frontend and Express.js for the backend.",
        tags: ["React", "Node", "MongoDB", "Tailwind", "Express.js", "JWT Authentication"],
        imageUrl: paytmSingup,
        link: "https://github.com/Praxxav/paytm_wallet",
    },
    {
        title: "Neural-Nexus",
        description:
            "Nuro! bot that can converse about anything! Can check answers of a topic! Can play Rock-paper-Scissors, Toss - Heads or Tails.",
        tags: ["Machine Learning", "LangChain", "Python", "LLMs", "SQL(Postgres)", "pycord", "alembic"],
        imageUrl: nural,
        link: "https://github.com/Praxxav/Nuro",
    },
    {
        title: "Blogz for Devs- Inspired by Medium",
        description:
            "Blogging Platform Offers - Signin, Signup, Users can Create, Read, Update, Delete their blogs.",
        tags: ["Cloudflare Workers", "TypeScript", "Hono", "Prisma", "Postgres", "JWT"],
        imageUrl: medium,
        link: "https://github.com/Praxxav/Medium-blogs",
    },
    {
        title: "EthWallet - Ethereum & Solana HD Wallet Generator",
        description:
            "Generating and managing Ethereum and Solana HD wallets from a mnemonic phrase.",
        tags: ["React", "Ethers.js", "BIP39", "Web3"],
        imageUrl: seed,
        link: "https://memonic-phrase-to-wallet.vercel.app/",
    },
    
] as const;

export const skillsData = [
    "AWS Services (S3, Lambda, EC2, IAM, CloudWatch, Glue, Athena, RDS,VPC)", "ETL pipeline development","HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Git", "Tailwind", "Prisma", "MongoDB",
    "Docker", "Express", "Framer Motion", "PostgreSQL", "Cloudflare", "Hono",
    
    "Linux Administration", "Shell Scripting", "Machine Learning"
    , "Data Analytics", "Web3", "CI/CD Processes",
    "Auto Scaling Groups"
    ] as const;
    
    
