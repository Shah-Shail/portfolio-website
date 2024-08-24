import Header from '../common/header'
import PageTransition from '../common/page-transition'
import StairTransition from '../common/stair-transition'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <StairTransition />
      <PageTransition>{children}</PageTransition>
    </div>
  )
}

export default Layout
