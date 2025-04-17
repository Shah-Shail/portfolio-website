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
        text: 'In this healthcare project, I played a versatile role that included developing a Report Builder module to empower users in generating dynamic, customized reports as one of several key functionalities within the application.'
      },
      {
        text: 'Integrated REST APIs and boosted UI performance by approximately 30% using lazy loading and efficient rendering.'
      },
      {
        text: 'I gained hands-on experience with a variety of packages such as react-table, react-hook-form, react-select, and react-zoom-pan-pinch, among others.'
      }
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
        text: 'Implemented animations in several parts of the module to make it more interactive and visually appealing.'
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
        text: 'In this healthcare project, I developed responsive modules and layouts with UI libraries like Ant Design, integrated essential packages, and connected REST APIs.'
      },
      {
        text: 'Developed a signature capture component using JavaScript and HTML5 Canvas API.'
      },
      {
        text: 'To reduce code complexity, minimize duplication, and enhance readability, I developed essential utility functions and custom hooks for common use cases throughout the project.'
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
