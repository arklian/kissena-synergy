import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Routes from './Routes'

const kissenaRouter = createBrowserRouter(Routes)

function Router() {
  return <RouterProvider router={kissenaRouter} />
}

export default Router