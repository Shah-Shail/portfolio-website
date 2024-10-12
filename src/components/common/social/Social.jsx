import { Link } from 'react-router-dom'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../ui/tooltip'

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/Shah-Shail', name: 'GitHub' },
  { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/shail-s', name: 'LinkedIn' }
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <TooltipProvider key={index} delayDuration={100}>
            <Tooltip>
              <TooltipTrigger>
                <Link to={item.path} className={iconStyles} target="_blank">
                  {item.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p className="capitalize">{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      })}
    </div>
  )
}

export default Social
