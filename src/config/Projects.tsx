import Appwrite from '@/components/technologies/Appwrite';
import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import Google from '@/components/technologies/Google';
import MDXIcon from '@/components/technologies/MDXIcon';
import Android from '@/components/technologies/mobile/Android';
import BLE from '@/components/technologies/mobile/BLE';
import Java from '@/components/technologies/mobile/Java';
import JetpackCompose from '@/components/technologies/mobile/JetpackCompose';
import Kotlin from '@/components/technologies/mobile/Kotlin';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import Sanity from '@/components/technologies/Sanity';
import Shadcn from '@/components/technologies/Shadcn';
import SocketIo from '@/components/technologies/SocketIo';
import SQLLite from '@/components/technologies/SQLLite';
import TailwindCss from '@/components/technologies/TailwindCss';
import ThreeJs from '@/components/technologies/ThreeJs';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Lennox Homeowner App',
    description:
      'A useful app for homeowners to manage and control their Lennox HVAC systems remotely with ease.',
    image: '/project/HO.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/notesbuddy.mp4?tr=orig',
    link: 'https://play.google.com/store/apps/details?id=com.lennox.s40.homeowner&hl=en',
    technologies: [
      { name: 'Android', icon: <Android key="android" /> },
      { name: 'Java', icon: <Java key="java" /> },
      { name: 'Kotlin', icon: <Kotlin key="kotlin" /> },
      { name: 'Jetpack Compose', icon: <JetpackCompose key="jetpackcompose" /> },
      { name: 'Postman', icon: <Postman key="postman" /> },
      { name: 'BLE', icon: <BLE key="ble" /> }
    ],
    github: '',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/notesbuddy',
    isWorking: true,
  },
  {
    title: 'Lennox STA(Smart Technician App)',
    description:
      'A powerful app for HVAC technicians to efficiently install, configure, and troubleshoot Lennox systems on-site.',
    image: '/project/STA.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/appwrite.mp4',
    link: 'https://play.google.com/store/apps/details?id=com.lennox.s40.installer&hl=en',
    technologies: [
      { name: 'Android', icon: <Android key="android" /> },
      { name: 'Java', icon: <Java key="java" /> },
      { name: 'Kotlin', icon: <Kotlin key="kotlin" /> },
      { name: 'Jetpack Compose', icon: <JetpackCompose key="jetpackcompose" /> },
      { name: 'Postman', icon: <Postman key="postman" /> },
      { name: 'BLE', icon: <BLE key="ble" /> }
    ],
    github: 'https://github.com/ramxcodes/mcp-server',
    live: 'https://mcp.ramx.in/',
    details: true,
    projectDetailsPageSlug: '/projects/appwrite-mcp-server',
    isWorking: true,
  },
  {
    title: 'Tourist Guide Chat',
    description:
      'AI-powered tourist guide mobile app that offers places nearby as well as its rate and address.',
    image: '/project/syncify.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/syncify.mp4',
    link: '',
    technologies: [
      { name: 'Android', icon: <Android key="android" /> },
      { name: 'Jetpack Compose', icon: <JetpackCompose key="jetpackcompose" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Google Services', icon: <Google key="google" /> },
      { name: 'SQL Lite', icon: <SQLLite key="sqlLite" /> },
      { name: 'Postman', icon: <Postman key="postman" /> },
    ],
    github: 'https://github.com/Cristobal-Rivera-Moreno/Chat',
    live: '',
    details: true,
    projectDetailsPageSlug: '/projects/syncify',
    isWorking: true,
  },
  {
    title: 'Pasandida Aurat',
    description:
      'Innovative dating platform featuring anonymous questions and authentic connections - currently in development',
    image: '/project/pasandida.png',
    video: 'https://ik.imagekit.io/hokb3mrdr/pasandida.mp4',
    link: 'https://www.pasandidaurat.com/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Socket.io', icon: <SocketIo key="socketio" /> },
    ],
    live: 'https://www.pasandidaurat.com/',
    details: true,
    projectDetailsPageSlug: '/projects/pasandida-aurat',
    isWorking: false, // Currently in development
  }
];
