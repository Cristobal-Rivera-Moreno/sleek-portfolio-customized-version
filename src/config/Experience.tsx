import Angular from '@/components/technologies/Angular';
import AWS from '@/components/technologies/AWS';
import BootStrap from '@/components/technologies/BootStrap';
import Bun from '@/components/technologies/Bun';
import Cisco from '@/components/technologies/Cisco';
import CSharp from '@/components/technologies/CSharp';
import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import Figma from '@/components/technologies/Figma';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import Android from '@/components/technologies/mobile/Android';
import BLE from '@/components/technologies/mobile/BLE';
import Java from '@/components/technologies/mobile/Java';
import JetpackCompose from '@/components/technologies/mobile/JetpackCompose';
import Kotlin from '@/components/technologies/mobile/Kotlin';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Postman from '@/components/technologies/Postman';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import SQLServer from '@/components/technologies/SQLServer';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    isBlur: false,
    company: 'Krasamo',
    position: 'Mobile Developer',
    location: 'Aguascalientes, MX (On-Site)',
    image: '/company/krasamo.png',
    description: [
      'Integrated new Lennox HVAC systems into the existing smart home ecosystem, enhancing compatibility and user control through the mobile application.',
      'Integrated third-party services and APIs to enhance app functionality, including Samsung Mini-Splits and Ariston Water Heaters control systems.',
      'Led a comprehensive codebase refactoring initiative that improved maintainability, scalability, and development velocity across the entire platform.',
      'Maintained BLE connectivity and fixed related issues.',
      'Integrated various features and functionalities to enhance user experience.',
    ],
    startDate: 'February 2024',
    endDate: 'Present',
    technologies: [
      {
        name: 'Android',
        href: 'https://developer.android.com/',
        icon: <Android />,
      },
      {
        name: 'Bluetooth Low Energy',
        href: 'https://developer.android.com/develop/connectivity/bluetooth/ble/ble-overview?hl=ess-419',
        icon: <BLE />,
      },
      {
        name: 'Java',
        href: 'https://www.java.com/en/',
        icon: <Java />,
      },
      {
        name: 'Kotlin',
        href: 'https://kotlinlang.org/',
        icon: <Kotlin />,
      },
      {
        name: 'Jetpack Compose',
        href: 'https://developer.android.com/compose',
        icon: <JetpackCompose />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      }
    ],
    website: 'https://www.krasamo.com/',
    github: '',
    x: 'https://x.com/krasamoapps',
    instagram: '',
  },
  {
    isCurrent: false,
    company: 'Grupo Sinco',
    position: 'Software Engineer',
    location: 'Aguascalientes, MX (On-Site)',
    image: '/company/gruposinco.png',
    description: [
      'Gathered and analyzed requirements to design and implement backend services for various applications using C#, Angular and Laravel frameworks.',
      'Developed RESTful APIs and integrated third-party services to enhance application functionality and user experience.',
      'Collaborated with cross-functional teams to ensure seamless integration of backend services with frontend applications.',
      'Participated in code reviews and provided constructive feedback to ensure code quality and adherence to best practices using ADO.',
    ],
    startDate: 'February 2023',
    endDate: 'February 2024',
    technologies: [
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Express',
        href: 'https://expressjs.com/',
        icon: <ExpressJs />,
      },
      {
        name: 'Angular',
        href: 'https://angular.io/',
        icon: <Angular />,
      },
      {
        name: 'C Sharp',
        href: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
        icon: <CSharp />,
      },
      {
        name: 'SQL Server',
        href: 'https://www.microsoft.com/en-us/sql-server',
        icon: <SQLServer />,
      }
    ],
    website: 'https://gruposinco.com.mx/',
    linkedin: 'https://www.linkedin.com/company/grupo-sinco-tech',
  },

  {
    isCurrent: false,
    company: 'UAA',
    position: 'Intern Network Administrator',
    location: 'Aguascalientes, MX (On-Site)',
    image: '/company/uaa.png',
    description: [
      'Maintained and monitored the university’s network infrastructure to ensure optimal performance and security.',
      'Assisted UAA staff and students with technical support related to network connectivity and access issues.',
      'Fixed printer and software issues for university staff and students.',
      'Collaborated with the IT team to implement network upgrades and improvements.s',
    ],
    startDate: 'August 2022',
    endDate: 'February 2023',
    technologies: [
      {
        name: 'Cisco',
        href: 'https://www.cisco.com/',
        icon: <Cisco />,
      }
    ],
    website: 'https://www.uaa.mx/',
    x: 'https://x.com/uaa_mx',
    linkedin: 'https://www.linkedin.com/school/uaamx/',
  },

];
