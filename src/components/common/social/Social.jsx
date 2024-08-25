import { Link } from 'react-router-dom'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/Dil-Se-Developer' },
  { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/shail-s' }
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} to={item.path} className={iconStyles} target="_blank">
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social
