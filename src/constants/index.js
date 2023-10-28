import {
  backend,
  carrent,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  meta,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  shopify,
  starbucks,
  tailwind,
  tesla,
  threejs,
  tripguide,
  typescript,
  web,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Software Developer',
    company_name: 'Capco',
    icon: 'tesla',
    iconBg: '#383E56',
    date: '10/2021 - 05/2023',
    points: [
      'Developed core account management features within a customer-facing digital banking portal for BMO, resulting in a 40% increase in user satisfaction. (Angular 13, NgRx, RxJS)',
      'Implemented accessible designs for major banking components through close collaboration with the design team, drastically improving UI/UX.',
      'Reduced fraud by 30% by integrating an IVR application with a real-time fraud detection system, saving millions annually. (Java, Spring Boot)',
      'Led development of a cloud-native assets management system, handling 100TB+ of documents, leveraging Docker and Kubernetes for containerization and orchestration (React, Typescript, Flask, PostgreSQL, AWS S3).',
      'Mentored junior developers on frontend best practices through pair programming, and design reviews.',
    ],
  },
  {
    title: 'Software Developer',
    company_name: 'Capco',
    icon: 'tesla',
    iconBg: '#E6DEDD',
    date: '01/2020 - 05/2020',
    points: [
      'Built call flows and transaction capabilities for an IVR banking system serving 12M+ customers using Java, ensuring 99.99% uptime through rigorous stability testing and monitoring.',
      'Implemented a high-performance routing system to handle peak call volumes of 10k+ calls per minute.',
      'Conducted extensive unit, integration, e2e testing, maintaining near-zero defect rate in production. (JUnit, Mockito)',
    ],
  },
  {
    title: 'Full-Stack Software Developer',
    company_name: 'Blackberry',
    icon: 'tesla',
    iconBg: '#383E56',
    date: '09/2018 - 01/2019',
    points: [
      'Developed ETL pipelines to ingest and transform data daily from Google Play APIs into MongoDB.',
      'Built a Golang service to ingest real-time analytics events from mobile SDKs and process over 50K events/sec.',
      'Collaborated closely with UI/UX designers and, product owners to create an intuitive and user-centric dashboard using React and Node.js with d3.js to visualize complex data interactions.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'CIBC',
    icon: 'tesla',
    iconBg: '#E6DEDD',
    date: '01/2018 - 05/2018',
    points: [
      'Contributed to an internal C#/.NET trading platform managing millions in transactions; implemented core validation logic to ensure data accuracy.',
      'Reduced SQL query response times by 25% through indexing and optimizations for fast data retrieval.',
    ],
  },
];

const projects = [
  {
    name: 'GymGenius.ai',
    description:
      'AI-powered fitness app delivering personalized workout plans, workout logs, and performance-tracking visuals.',
    tags: [
      {
        name: 'next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'yellow-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'http://github.com/mudit147/GymGenius',
  },
  {
    name: 'Job IT',
    description:
      'AI chatbot offering more interactive and human-like conversations, powered by ChatGPT technology.',
    tags: [
      {
        name: 'next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'yellow-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'http://github.com/mudit147/berryAI',
  },
];

export { experiences, projects, services, technologies };
