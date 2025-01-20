import { KissenaRoutes } from '@kissena/Kissena.routes'

const Routes = [
  // Base path for hosting the kissena website
  {
    path: '/',
    children: KissenaRoutes,
  },
  {
    path: '*',
    description: ' 404 Not Found',
    element: <div>{'Whoops! 404!'}</div>,
  },
]

export default Routes
