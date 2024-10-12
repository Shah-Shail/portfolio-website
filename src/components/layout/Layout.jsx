import Header from '../common/header'
import PageTransition from '../common/page-transition'
import StairTransition from '../common/stair-transition'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header />
      <StairTransition />
      <PageTransition>
        <Outlet />
      </PageTransition>
    </div>
  )
}

export default Layout
