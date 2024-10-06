import { FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaPython, FaGit } from 'react-icons/fa'

import {
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiTestinglibrary,
  SiAntdesign,
  SiExpress,
  SiMongodb
} from 'react-icons/si'

import { TbSql } from 'react-icons/tb'

import { VscVscode } from 'react-icons/vsc'

//  experience data
export const experience = {
  icon: '/public/assets/resume/badge.svg',
  title: 'My Experience',
  description:
    'Proven track record in diverse development roles, including finance, delivering scalable solutions with a focus on adaptability and problem-solving.',
  items: [
    {
      company: 'Arche Softronix',
      position: 'Associate Front-End Developer',
      duration: 'Sep 2022 - Present'
    },
    {
      company: 'Arche Softronix',
      position: 'Trainee Developer',
      duration: 'Mar 2022 - Aug 2022'
    },
    {
      company: 'Money Mantra Financial Services',
      position: 'Financial Serviecs Associate',
      duration: 'May 2021 - Feb 2022'
    },
    {
      company: 'Value Max Financial Services',
      position: 'Financial Serviecs Associate',
      duration: 'Dec 2020 - Apr 2021'
    }
  ]
}

//  education data
export const education = {
  icon: '/public/assets/resume/cap.svg',
  title: 'My Education',
  description:
    'Strong foundation in mathematics and web technologies like React and Python, continuously enhancing my software development expertise.',
  items: [
    {
      institution: 'Online Course Platform',
      degree:
        'React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller',
      duration: '2022'
    },
    {
      institution: 'Online Course Platform',
      degree: ' HTML5,CSS3,JavaScript & Python',
      duration: '2020'
    },
    {
      institution: 'Maharaja Sayajirao University,Vadodara',
      degree: 'B.Sc (Mathematics)',
      duration: '2020'
    }
  ]
}

// skills data
export const skills = {
  title: 'My Skills',
  description:
    'Versatile in modern web technologies including JavaScript, React, and Python, ensuring seamless integration across the development stack.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'Html5'
    },
    {
      icon: <FaCss3 />,
      name: 'Css3'
    },
    {
      icon: <FaJs />,
      name: 'Javascript'
    },
    {
      icon: <SiTypescript />,
      name: 'Typescript'
    },
    {
      icon: <FaPython />,
      name: 'Python'
    },
    {
      icon: <FaReact />,
      name: 'React.js'
    },
    {
      icon: <SiRedux />,
      name: 'Redux'
    },
    {
      icon: <SiTestinglibrary />,
      name: 'React Testing'
    },
    {
      icon: <SiAntdesign />,
      name: 'UI Library'
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind.css'
    },
    {
      icon: <FaNode />,
      name: 'Node.js'
    },
    {
      icon: <SiExpress />,
      name: 'Express.js'
    },
    {
      icon: <SiMongodb />,
      name: 'MongoDB'
    },
    {
      icon: <TbSql />,
      name: 'SQL'
    },
    {
      icon: <VscVscode />,
      name: 'VS Code'
    },
    {
      icon: <FaGit />,
      name: 'Git'
    }
  ]
}

// about data
export const about = {
  title: 'About me',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, excepturi nesciunt.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Shail Shah'
    },
    {
      fieldName: 'Email',
      fieldValue: 'shailshah2526@gmail.com'
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+91) 997 99 064 54'
    },
    {
      fieldName: 'Experience',
      fieldValue: '2+ Years'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Indian'
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Hindi, Gujarati'
    }
  ]
}
