import React from "react";
import { FaAws, FaLock, FaDocker } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { FaBarsProgress, FaBlog } from "react-icons/fa6";
import { SiPrometheus, SiKubernetes } from "react-icons/si";

import paytmSingup from "@/public/Paytm_singup.png";
import nural from "@/public/nginx.png";
import medium from "@/public/blog.png";
import seed from "@/public/php-encryption.jpg";
import prop from "@/public/auto.png";
import rtsp from "@/public/prom.png";
import doc from "@/public/ecs.png";
import eksAlb from "@/public/eks_alb.png";
import prelexa from "@/public/prelexa.png";
import prescale from "@/public/prescale.png";

export const links = [
    { name: "Home", hash: "#home" },
    { name: "About", hash: "#about" },
    { name: "Projects", hash: "#projects" },
    { name: "Skills", hash: "#skills" },
    { name: "Experience", hash: "#experience" },
    { name: "Contact", hash: "#contact" },
] as const;


// ============================================================
// DEVOPS & SRE FOCUSED DATA
// ============================================================

export const experiencesData = [
    {
        title: "Trainee, StratVeda Technologies Pvt Ltd",
        location: "Pune, Maharashtra, India",
        description:
            "Deployed and managed backend APIs on Linux-based AWS infrastructure ensuring high availability. Configured Nginx reverse proxy and load balancing. Built monitoring dashboards using Prometheus & Grafana tracking latency, uptime, and error rates. Performed log analysis and troubleshooting to improve system stability.",
        icon: React.createElement(FaAws),
        date: "Aug 2025 – Oct 2025",
    },
    {
        title: "SDE Intern, Skylark Labs",
        location: "Pune, Maharashtra, India",
        description:
            "Integrated AI services into production systems using Python and FastAPI microservices. Built real-time streaming services using WebRTC for low-latency communication. Deployed and maintained services on Linux cloud environments. Troubleshot streaming and network issues using HTTP diagnostics, logs, and system monitoring tools.",
        icon: React.createElement(FaBarsProgress),
        date: "Jul 2025 – Aug 2025",
    },
    {
        title: "Prelexa - Document AI workflows",
        location: "Pune, India",
        description:
            "Lead development of AI workflows for document automation, overseeing architecture, coding, and deployment. Collaborated with cross-functional teams to ensure timely delivery and alignment with business goals.",
        icon: React.createElement(FaBarsProgress),
        date: "Nov 2025 - Feb 2026",
    },
    {
        title: "AWS - Data Engineering Internship",
        location: "Pune India",
        description:
            "Pursuing a data engineering internship focused on building robust data pipelines, optimizing ETL processes, and supporting data-driven decision-making.",
        icon: React.createElement(FaAws),
        date: "July - Sep 2024",
    },
    // -----------------------------------------------------------
    // COMMENTED OUT: Old Full Stack experience entries
    // -----------------------------------------------------------
    // {
    //     title: "Trainee - Full stack Developer",
    //     location: "Pune, India",
    //     description:
    //         "Lead development of MVP for startup, overseeing architecture, coding, and deployment. Collaborated with cross-functional teams to ensure timely delivery and alignment with business goals.",
    //     icon: React.createElement(FaBarsProgress),
    //     date: "Aug 2025 - Nov 2025",
    // },
    // {
    //     title: "SDE Intern - Skylark Labs",
    //     location: "Pune, India",
    //     description:
    //         "Developed AI-powered authentication and real-time face detection systems, integrated with Django REST, WebRTC, and RTSP to enhance video streaming experiences.",
    //     icon: React.createElement(FaBarsProgress),
    //     date: "June - Aug 2025",
    // },
    // {
    //     title: "Paytm Clone - Full-Stack Application",
    //     location: "Pune India",
    //     description:
    //         "Features user sign-up, log-in, with OAuth validation, balance checks, fund transfers, and transaction views. Utilizes React for the frontend and Express.js for the backend.",
    //     icon: React.createElement(BsGraphUp),
    //     date: "Feb 2024 - Apr 2024",
    // },
    // {
    //     title: "Blogz for Devs- Inspired by Medium",
    //     location: "Pune",
    //     description:
    //         "Developed Blogging Platform Offers - Signin, Signup, Users can Create, Read, Update, Delete their blogs.",
    //     icon: React.createElement(FaBlog),
    //     date: "Dec 2023 - Jan 2024",
    // },
    // {
    //     title: "EthWallet - Ethereum & Solana HD Wallet Generator",
    //     location: "Pune, India",
    //     description:
    //         "EthWallet is a secure solution for generating and managing Ethereum and Solana HD wallets from a single mnemonic phrase. Built with React for a responsive UI, it uses Ethers.js for Ethereum interaction, BIP39 for mnemonic security, and Web3.js for smooth blockchain integration and transaction management.",
    //     icon: React.createElement(FaLock),
    //     date: "2024",
    // },
] as const;

export const projectsData = [
    // ============================================================
    // NEW DEVOPS & SRE PROJECTS
    // ============================================================
    {
        title: "Scalable Backend on AWS EKS with ALB Ingress",
        description:
            "Deployed scalable backend on EKS with 5 replicas using Deployments, Services & ALB Ingress for high availability. Containerized apps with Docker in a cloud-native environment.",
        tags: ["AWS EKS", "Kubernetes", "Docker", "ALB Ingress", "Load Balancing"],
        imageUrl: eksAlb,
        link: "",
        githuburl: "https://github.com/Praxxav/eks-with-fargate-and-ingress/"
    },
    {
        title: "Prelexa – AI Collaboration Platform",
        description:
            "Built AI-powered multi-tenant platform with Gemini API, real-time WebSocket video chat, RBAC, and cron-based credit management. Dockerized with CI/CD, deployed on Vercel + Render.",
        tags: ["Docker", "CI/CD", "WebSocket", "Gemini API", "Vercel", "Render"],
        imageUrl: prescale,
        link: "https://www.prescalelabs.com",
        githuburl: "https://github.com/Praxxav/prelexa-fe"
    },
    {
        title: "AWS Auto Scaling + Load Balancer",
        description:
            "Designed and deployed an Auto Scaling Group (ASG) with EC2 behind an Application Load Balancer (ALB). Implemented dynamic scaling using CloudWatch alarms based on CPU load, improving system availability and fault tolerance",
        tags: ["AWS EC2", "ASG", "ALB", "CloudWatch"],
        imageUrl: prop,
        link: "",
        githuburl: ""
    },
    {
        title: "Containerized Microservices Deployment",
        description:
            "Deployed microservices using Docker containers on AWS EC2. Configured Nginx reverse proxy for efficient routing and load distribution. Monitored logs and system processes to maintain uptime and service reliability.",
        tags: ["Docker", "Nginx", "Linux", "AWS EC2"],
        imageUrl: nural,
        link: "",
        githuburl: ""
    },
    {
        title: "Monitoring with Prometheus & Grafana",
        description:
            "Implemented metrics collection and visualization system for infrastructure and applications. Built dashboards for CPU, memory, latency, and service performance tracking. Configured alerting mechanisms, reducing incident response time and improving reliability.",
        tags: ["Prometheus", "Grafana", "Linux", "Docker"],
        imageUrl: rtsp,
        link: "",
        githuburl: ""
    },
    {
        title: "AWS ECS + CI/CD Pipeline Deployment",
        description:
            "Built and deployed containerized applications using Docker + AWS ECS (Fargate). Pushed images to AWS ECR and automated deployment using GitHub Actions. Integrated CloudWatch logging and monitoring for production visibility.",
        tags: ["AWS ECS", "Fargate", "ECR", "GitHub Actions", "Docker"],
        imageUrl: doc,
        link: "",
        githuburl: ""
    },
    // -----------------------------------------------------------
    // COMMENTED OUT: Old Full Stack projects
    // -----------------------------------------------------------
    // {
    //     title: "Prelexa - Document AI workflows",
    //     description:
    //         "Built a system to convert legal documents into reusable templates, extract key variables, and generate complete drafts via an intelligent chat-based workflow",
    //     tags: ["Python", "FastApi", "NextJs", "Gemini API", "exa.ai"],
    //     imageUrl: doc,
    //     link: "https://www.prescalelabs.com",
    //     githuburl: "https://github.com/Praxxav/prelexa-fe"
    // },
    // {
    //     title: "RTSP Face Detection System",
    //     description:
    //         "Developed AI-powered authentication and real-time face detection systems, integrated with Django REST,and RTSP to enhance video streaming experiences.",
    //     tags: ["Python", "Django Rest Framework", "RTSP", "AI"],
    //     imageUrl: rtsp,
    //     link: "",
    //     githuburl: "https://github.com/Praxxav/RTSP_face_detection"
    // },
    // {
    //     title: "PropTradx-Prop trading platform",
    //     description:
    //         "PropTradX is a proprietary trading platform for Forex a simulated funding model.",
    //     tags: ["NextJs", "NodeJs", "Postgresql", "Tailwind", "OAuth", "razorpay"],
    //     imageUrl: prop,
    //     link: "https://proptradx.netlify.app/",
    //     githuburl: "https://github.com/Praxxav/PropTradx"
    // },
    // {
    //     title: "Paytm Clone - Full-Stack Application",
    //     description:
    //         "Features user sign-up, log-in, with OAuth validation, balance checks, fund transfers, and transaction views. Utilizes Nextjs, webpacks",
    //     tags: ["Nextjs", "Node", "Postgresql", "Tailwind", "Prisma", "Oauth", ""],
    //     imageUrl: paytmSingup,
    //     link: "",
    //     githuburl: "https://github.com/Praxxav/paytm_wallet"
    // },
    // {
    //     title: "Neural-Nexus",
    //     description:
    //         "Nuro! bot that can converse about anything! Can check answers of a topic! Can play Rock-paper-Scissors, Toss - Heads or Tails.",
    //     tags: ["Machine Learning", "LangChain", "Python", "LLMs", "SQL(Postgres)", "pycord", "alembic"],
    //     imageUrl: nural,
    //     link: "",
    //     githuburl: "https://github.com/Praxxav/Nuro"
    // },
    // {
    //     title: "Blogz for Devs- Inspired by Medium",
    //     description:
    //         "Blogging Platform Offers - Signin, Signup, Users can Create, Read, Update, Delete their blogs.",
    //     tags: ["Cloudflare Workers", "TypeScript", "Hono", "Prisma", "Postgres", "JWT"],
    //     imageUrl: medium,
    //     link: "",
    //     githuburl: "https://github.com/Praxxav/Medium-blogs"
    // },
    // {
    //     title: "EthWallet - Ethereum & Solana HD Wallet Generator",
    //     description:
    //         "Generating and managing Ethereum and Solana HD wallets from a mnemonic phrase.",
    //     tags: ["React", "Ethers.js", "BIP39", "Web3"],
    //     imageUrl: seed,
    //     link: "https://memonic-phrase-to-wallet.vercel.app/",
    //     githuburl: ""
    // },
] as const;

// ============================================================
// DEVOPS & SRE SKILLS
// ============================================================
export const skillsData = [
    "AWS (EC2, VPC, ALB, ECS, EKS, S3, Lambda, CloudFront, CloudWatch)",
    "GCP", "Azure",
    "Linux/Unix", "Bash Scripting", "System Monitoring", "Log Analysis",
    "JavaScript", "TypeScript", "Python",
    "Docker", "Kubernetes", "Helm",
    "Prometheus", "Grafana", "New Relic",
    "SLI/SLO/SLA",
    "GitHub Actions", "CI/CD Pipelines",
] as const;

// -----------------------------------------------------------
// COMMENTED OUT: Old Full Stack skills
// -----------------------------------------------------------
// export const skillsData = [
//     "TypeScript", "React", "Node.js", "Git", "Tailwind", "Prisma", "AWS Services (S3, Lambda, EC2, IAM, CloudWatch, Glue, Athena, RDS,VPC)", "HTML", "CSS", "JavaScript", "MongoDB",
//     "Docker", "Express", "Framer Motion", "PostgreSQL", "Cloudflare",
//     "Linux", "Shell Scripting", "Machine Learning",
// ] as const;

import awsCert from "@/public/aws_cert.jpg";
import devopsCert from "@/public/devops_cert.jpg";

export const certificationsData = [
    {
        title: "AWS Academy Graduate - Cloud Foundations",
        issuer: "Amazon Web Services",
        imageUrl: awsCert,
        link: "https://www.credly.com/badges/1bdb53fd-945c-4696-a022-b549b7f35603/public_url",
    },
    {
        title: "DevOps Cohort Certification",
        issuer: "DevOps Training Program",
        imageUrl: devopsCert,
        link: "",
    },
] as const;
