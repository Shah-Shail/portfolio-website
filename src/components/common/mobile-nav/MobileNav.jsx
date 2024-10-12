import { useLocation } from 'react-router-dom'
import { Sheet, SheetContent, SheetTrigger } from '../../ui/sheet'
import { Link } from 'react-router-dom'
import { CiMenuFries } from 'react-icons/ci'
import { AppRoutingConfig } from '../../../assests/config/AppRoutingConfig'

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
const MobileNav = () => {
  /*routing dependencies */
  const pathLocation = useLocation()
  const getActivePath = pathLocation.pathname.split('/')?.[2]
  const active = (link) => (link.name === 'home' && !getActivePath) || link.path === getActivePath
  /*routing dependencies */

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="xl:hidden flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link to={AppRoutingConfig.APP_HOME}>
            <h1 className="text-4xl font-semibold">
              Shail <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                to={link.path}
                key={index}
                className={`${active(link) && 'text-accent border-b-2 border-accent'} text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
