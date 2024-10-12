import Layout from 'src/components/layout/Layout'
import Home from '../../components/pages/home'
import Resume from '../../components/pages/resume'
import Work from '../../components/pages/work'
import { AppRoutingConfig } from '../../assests/config/AppRoutingConfig'

export const routesConfig = [
  {
    path: 'portfolio-website',
    element: <Layout />,
    children: [
      {
        path: AppRoutingConfig.APP_HOME,
        element: <Home />
      },
      {
        path: AppRoutingConfig.APP_RESUME,
        element: <Resume />
      },
      {
        path: AppRoutingConfig.APP_WORK,
        element: <Work />
      }
    ]
  }
]
