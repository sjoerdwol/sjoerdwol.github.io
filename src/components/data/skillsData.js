import { FaHtml5 , FaCss3Alt , FaJsSquare , FaReact, FaGitAlt, FaGithub, FaNpm } from 'react-icons/fa';
import { SiCucumber, SiCypress, SiTailwindcss, SiSonarqube, SiJenkins } from 'react-icons/si';

export const skillsData = [
  {
    title: 'Frontend Web Development',
    description: 'Since my studies I was interested in Frontend Web Development. I decided to follow this up with the Frontend Engineer Career Path on Codecademy. Even though I have not finished it yet, I have learned quite a lot already.',
    icons: [<FaHtml5 />, <FaCss3Alt />, <SiTailwindcss />, <FaJsSquare />, <FaReact />]
  },
  {
    title: 'Software Quality Assurance', 
    description: 'At my current job, I am a Software Engineer who is tasked with teaching Software Engineers on how to properly test your software. For this, I need expertise in static analysis, software testing and test automation.',
    icons: [<SiCypress />, <SiCucumber />, <SiSonarqube />]
  },
  {
    title: 'General Developer Knowledge', 
    description: 'During both my job and my hobby development, I use a lot of different development tools. This includes Git, GitHub aswell as Jenkins for CI/CD.',
    icons: [<FaGitAlt />, <FaGithub />, <FaNpm />, <SiJenkins />]
  },
];