import { FaHtml5 , FaCss3Alt , FaJsSquare , FaReact, FaGitAlt, FaGithub, FaNpm } from 'react-icons/fa';
import { SiCucumber, SiCypress, SiTailwindcss, SiSonarqube, SiJenkins } from 'react-icons/si';

export const skillsData = [
  {
    title: 'Frontend Web Development',
    description: 'Cooler Text',
    icons: [<FaHtml5 />, <FaCss3Alt />, <SiTailwindcss />, <FaJsSquare />, <FaReact />]
  },
  {
    title: 'Software Quality Assurance', 
    description: 'text',
    icons: [<SiCypress />, <SiCucumber />, <SiSonarqube />]
  },
  {
    title: 'General Developer Knowledge', 
    description: 'text',
    icons: [<FaGitAlt />, <FaGithub />, <FaNpm />, <SiJenkins />]
  },
];