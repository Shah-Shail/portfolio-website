import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNode } from 'react-icons/fa'

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'

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
      fieldName: 'Email',
      fieldValue: 'shailshah2526@gmail.com'
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Hindi, Gujarati'
    }
  ]
}

//  experience data
export const experience = {
  icon: '/public/assets/resume/badge.svg',
  title: 'My experience',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, excepturi nesciunt.',
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
  title: 'My education',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, excepturi nesciunt.',
  items: [
    {
      institution: 'Online Course Platform',
      degree:
        'React - The Complete Guide (incl Hooks, React Router, Redux) - Maximilian Schwarzmüller',
      duration: '2022'
    },
    {
      institution: 'Online Course Platform',
      degree: ' HTML5,CSS3,JavaScript&Python',
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
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, excepturi nesciunt.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5'
    },
    {
      icon: <FaCss3 />,
      name: 'css 3'
    },
    {
      icon: <FaJs />,
      name: 'javascript'
    },
    {
      icon: <FaReact />,
      name: 'react.js'
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js'
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css'
    },
    {
      icon: <FaNode />,
      name: 'node.js'
    },
    {
      icon: <FaFigma />,
      name: 'figma'
    }
  ]
}
