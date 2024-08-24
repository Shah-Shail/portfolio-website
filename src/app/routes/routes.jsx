import Layout from 'src/components/layout/Layout'
import Home from '../../components/pages/home'
import Resume from '../../components/pages/resume'
import Contact from '../../components/pages/contact'
import { AppRoutingConfig } from '../../assests/config/AppRoutingConfig'

export const routesConfig = [
  {
    path: AppRoutingConfig.APP_HOME,
    element: (
      <Layout>
        <Home />
      </Layout>
    )
  },
  {
    path: AppRoutingConfig.APP_RESUME,
    element: (
      <Layout>
        <Resume />
      </Layout>
    )
  },
  {
    path: AppRoutingConfig.APP_CONTACT,
    element: (
      <Layout>
        <Contact />
      </Layout>
    )
  }
]
