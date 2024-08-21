import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routesConfig } from './routes/routes'

const App = () => {
  return <RouterProvider router={createBrowserRouter(routesConfig)} />
}

export default App
