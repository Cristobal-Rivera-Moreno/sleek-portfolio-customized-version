import Google from '@/components/technologies/Google';
import Android from '@/components/technologies/mobile/Android';
import BLE from '@/components/technologies/mobile/BLE';
import Java from '@/components/technologies/mobile/Java';
import JetpackCompose from '@/components/technologies/mobile/JetpackCompose';
import Kotlin from '@/components/technologies/mobile/Kotlin';
import Postman from '@/components/technologies/Postman';
import Python from '@/components/technologies/Python';
import SQLLite from '@/components/technologies/SQLLite';
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
    details: false,
    projectDetailsPageSlug: '',
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
    live: '',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'Tourist Guide Chat',
    description:
      'AI-powered tourist guide mobile app that offers places nearby as well as its rate and address.',
    image: '/project/tourist-chat.png',
    video: 'https://ik.imagekit.io/hjmradn4t/TouristApp.MP4',
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
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'Go News App',
    description:
      'A news app that provides users with the latest news articles from various sources, allowing them to stay informed and up-to-date on current events.',
    image: '/project/go-news.png',
    video: 'https://ik.imagekit.io/hjmradn4t/NewsApp.MP4',
    link: '',
   technologies: [
      { name: 'Android', icon: <Android key="android" /> },
      { name: 'Jetpack Compose', icon: <JetpackCompose key="jetpackcompose" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Google Services', icon: <Google key="google" /> },
      { name: 'SQL Lite', icon: <SQLLite key="sqlLite" /> },
      { name: 'Postman', icon: <Postman key="postman" /> },
    ],
    github: 'https://github.com/Cristobal-Rivera-Moreno/GoNews',
    live: '',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: false, // Currently in development
  }
];
