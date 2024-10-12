import { AppRoutingConfig } from '../../../assests/config/AppRoutingConfig'
import { Link, useLocation } from 'react-router-dom'

const links = [
  {
    name: 'home',
    path: AppRoutingConfig.APP_HOME
  },
  {
    name: 'resume',
    path: AppRoutingConfig.APP_RESUME
  },
  {
    name: 'work',
    path: AppRoutingConfig.APP_WORK
  }
]

const Nav = () => {
  /*routing dependencies */
  const pathLocation = useLocation()
  const getActivePath = pathLocation.pathname.split('/')?.[1]
  const active = (link) => (link.name === 'home' && !getActivePath) || link.path === getActivePath

  /*routing dependencies */
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            to={link.path}
            key={index}
            className={`${active(link) && 'text-accent border-b-2 border-accent'} capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
