import { Link } from 'react-router-dom'
import Nav from '../nav'
import { Button } from '../../../components/ui/button'
import { AppRoutingConfig } from '../../../assests/config/AppRoutingConfig'
import MobileNav from '../mobile-nav'

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={AppRoutingConfig.APP_HOME}>
          <h1 className="text-4xl font-semibold">
            Shail <span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link to={AppRoutingConfig.APP_CONTACT}>
            <Button>Download CV</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
