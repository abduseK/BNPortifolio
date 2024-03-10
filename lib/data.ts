import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { RiFlutterFill } from "react-icons/ri";
import { CiBank } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import yeelmkazna from "@/public/project1.jpg";
import pello from "@/public/project2.jpg";
import cakeshop from "@/public/project3.png"
import wtms from "@/public/project4.jpg"
import walletx from "@/public/project5.jpg"
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BSc in Computer Science",
    location: "Addis Ababa, Ethiopia",
    description:
      "I graduated from Addis Ababa university with a BSc of Computer Science",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Lead Mobile App Developer",
    location: "Addis Ababa",
    description:
      "I worked as the Lead Flutter Mobile Developer for the big project, WalletX.",
    icon: React.createElement(RiFlutterFill),
    date: "3 Months",
  },
  {
    title: "IFB Operation Officer",
    location: "Addis Ababa",
    description:
      "I'm now working at a private bank in Addis Ababa where I apply my knowledge and experience to enhance the industry.",
    icon: React.createElement(CiBank),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Ye-Elm-Kazna",
    description:
      "This was my first mobile app project built using flutter. It was developed for a telegram channel aiming to scale the accessebility of the channel's contents.",
    tags: ["Flutter"],
    imageUrl: yeelmkazna,
  },
  {
    title: "wtms (Woreda Tasks Managemnt System",
    description:
      "A simple and easy platform where local communities register for resident, apply for certificates(birth, death, wedding)",
    tags: ["React", "Node js", "Mongo DB", "Tailwind"],
    imageUrl: wtms,
  },
  {
    title: "Pello",
    description:
      "Pello world is a platform designed for technology students to access the modules, learning materials and project samples easly.",
    tags: ["Flutter", "Firebase"],
    imageUrl: pello,
  },
  {
    title: "WalletX",
    description:
      "A payment platform for sending and receiving money from one wallet to another. @bytefarm",
    tags: ["Flutter", "Node js", "sqflite"],
    imageUrl: walletx,
  },
  {
    title: "Cake-Shop",
    description:
      "A simple cake shop app to order cake",
    tags: ["Flutter"],
    imageUrl: cakeshop,
  },
] as const;

export const skillsData = [
  "Flutter",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Django",
  "Adobe Premiere"
] as const;
