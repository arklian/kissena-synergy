import { HomePage } from '@kissena/pages/home/Home.page'
import { DemoPage } from '@kissena/pages/placeholder/Demo.page'



export const KissenaRoutes = [
  {
    index: true,
    description: 'Home',
    element: <HomePage />,
  },

  {
    path: 'placeholder',
    description: 'placeholder for future content',
    element: <DemoPage/>,
  },
]
