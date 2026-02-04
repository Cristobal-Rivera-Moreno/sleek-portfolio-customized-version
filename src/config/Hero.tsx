/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import Android from '@/components/technologies/mobile/Android';
import Java from '@/components/technologies/mobile/Java';
import JetpackCompose from '@/components/technologies/mobile/JetpackCompose';
import Kotlin from '@/components/technologies/mobile/Kotlin';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import NestJs from '@/components/technologies/NestJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
// Technology Components
import TypeScript from '@/components/technologies/TypeScript';
import CSharp from '@/components/technologies/CSharp';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
  Android: Android,
  Kotlin: Kotlin,
  Java: Java,
  JetpackCompose: JetpackCompose,
  NestJs: NestJs,
  CSharp
};

export const heroConfig = {
  // Personal Information
  name: 'Cristobal Rivera Moreno',
  title: 'A Mobile Developer.',
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'Android',
      href: 'https://developer.android.com/',
      component: 'Android',
    },
    {
      name: 'Kotlin',
      href: 'https://kotlinlang.org/',
      component: 'Kotlin',
    },
    {
      name: 'Java',
      href: 'https://www.java.com/',
      component: 'Java',
    },
    {
      name: 'Compose',
      href: 'https://developer.android.com/jetpack/compose',
      component: 'JetpackCompose',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
    {
      name: 'MongoDB',
      href: 'https://www.mongodb.com/',
      component: 'MongoDB',
    },
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'Nest Js',
      href: 'https://nestjs.com/',
      component: 'NestJs',
    },
    {
      name: 'C Sharp',
      href: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
      component: 'CSharp',
    }
  ],

  // Description Configuration
  description: {
    template:
      'I develop mobile apps using {skills:0}, {skills:1}, {skills:2}, {skills:3}, {skills:4} and {skills:5} Besides, I have expertise in {skills:6}, {skills:7} and {skills:8} technologies as a backend developer \nI love building products that solve real-world problems and deliver seamless user experiences. Nowadays, I am knowledgeable about Android Development, nonetheless, I\'d like to learn iOS development too.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/cristobal-rivera-moreno-201966290/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/Cristobal-Rivera-Moreno',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:cristobal.rivera.moreno.11@gmail.com',
    icon: <Mail />,
  },
];
