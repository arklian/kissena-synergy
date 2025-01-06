import { HomePage } from '@kissena/pages/home/Home.page'

export const KissenaRoutes = [
  {
    index: true,
    description: 'Home',
    element: <HomePage />,
  },
  {
    path: 'placeholder',
    description: 'placeholder for future content',
    element: <div>A funny lil placeholder.</div>,
  },
]
