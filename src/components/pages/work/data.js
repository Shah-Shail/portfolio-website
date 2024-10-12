import ProactLogo from '../../../assests/images/work/Proact.png'
import OpsAcuityLogo from '../../../assests/images/work/OpsAcuity.png'
import SynAppLogo from '../../../assests/images/work/SynApp.png'

export const projects = [
  {
    num: '01',
    name: 'PROACT',
    projectType: 'Company Project',
    title: 'project 1',
    description: [
      {
        text: 'In this healthcare project, I have experience with various packages including react-table, react-hook-form, react-select, react-zoom-pan-pinch, and several others.'
      },
      {
        text: 'Developed a Report Builder module allowing users to generate dynamic reports based on their needs.'
      },
      { text: ' Also developed modules, incorporated essential packages, and integrated APIs.' }
    ],
    stack: [{ name: 'React.js' }, { name: 'Javascript' }, { name: 'Redux' }, { name: 'SCSS' }],
    image: ProactLogo,
    live: '',
    github: ''
  },
  {
    num: '02',
    name: 'OPSACUITY',
    projectType: 'Company Project',
    title: 'project 2',
    description: [
      {
        text: 'Contributed to the ERP system by setting up the folder structure and configuring the routing architecture for different modules.'
      },
      {
        text: 'I implemented comprehensive Roles and Permissions management and also utilized the ApexCharts package for graphs.'
      },
      {
        text: 'I implemented animations in several parts of the module to make it more interactive and visually appealing for users.'
      }
    ],
    stack: [{ name: 'React.js' }, { name: 'TypeScript' }, { name: 'Redux' }, { name: 'CSS' }],
    image: OpsAcuityLogo,
    live: '',
    github: ''
  },
  {
    num: '03',
    name: 'SYNAPP',
    projectType: 'Company Project',
    title: 'project 3',
    description: [
      {
        text: 'In this healthcare project, I developed responsive modules and layouts with UI libraries like Ant Design, integrated essential packages, and connected APIs.'
      },
      {
        text: 'I developed utility functions and custom hooks for common use throughout the project.'
      }
    ],
    stack: [
      { name: 'React.js' },
      { name: 'Javascript' },
      { name: 'Redux' },
      { name: 'Ant Design' },
      { name: 'CSS' }
    ],
    image: SynAppLogo,
    live: '',
    github: ''
  }
]
