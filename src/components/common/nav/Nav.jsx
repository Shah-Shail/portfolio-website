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
    name: 'contact',
    path: AppRoutingConfig.APP_CONTACT
  }
]

const Nav = () => {
  /*routing dependencies */
  const pathLocation = useLocation()
  /*routing dependencies */
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            to={link.path}
            key={index}
            className={`${link.path === pathLocation.pathname && 'text-accent border-b-2 border-accent'} capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
